import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { EMAIL_ADDRESS } from "@/constants";

// Create transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // your@gmail.com
    pass: process.env.GMAIL_APP_PASS, // 16-digit app password
  },
});

// Email validation regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email format
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Validate environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase configuration:", {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      });
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Create a Supabase client for server-side operations
    // Use service role key if available (bypasses RLS), otherwise use anon key
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Normalize email to lowercase
    const subscriberEmail = trimmedEmail.toLowerCase();

    // Check if email already exists in the database
    const { data: existingSubscriber, error: checkError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("email", subscriberEmail)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new emails
      // Any other error means there's a problem
      console.error("Error checking for duplicate email:", checkError);
      if (checkError.message && checkError.message.includes("fetch")) {
        return NextResponse.json(
          { error: "Database connection error. Please try again later." },
          { status: 503 }
        );
      }
      throw checkError;
    }

    // If email already exists, return friendly message
    if (existingSubscriber) {
      return NextResponse.json(
        {
          error:
            "This email is already subscribed to our newsletter. Thank you for your interest!",
          alreadySubscribed: true,
        },
        { status: 409 }
      );
    }

    // Insert email into newsletter_subscribers table
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: subscriberEmail }])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      // Check if it's a duplicate email error (fallback in case of race condition)
      if (error.code === "23505") {
        return NextResponse.json(
          {
            error:
              "This email is already subscribed to our newsletter. Thank you for your interest!",
            alreadySubscribed: true,
          },
          { status: 409 }
        );
      }
      // Check if it's a network/connection error
      if (error.message && error.message.includes("fetch")) {
        return NextResponse.json(
          { error: "Database connection error. Please try again later." },
          { status: 503 }
        );
      }
      throw error;
    }

    // Send welcome email to subscriber (client) every time someone signs up
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: subscriberEmail,
      subject: "Welcome to The Speech Heroes Newsletter!",
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>Hello there,</p>
        <p>Thank you for joining The Speech Heroes newsletter! We're thrilled to have you as part of our community.</p>
        <p>You'll now receive:</p>
        <ul>
          <li>News and updates about our products and books</li>
          <li>Updates on The Speech Heroes Vox Pops and our podcast</li>
          <li>Special offers and early access to upcoming releases</li>
          <li>Heart-warming stories of children and families making progress</li>
        </ul>
        <p>We promise — no spam. Just meaningful updates whenever we have something truly worth sharing.</p>
        <p>Thank you for being part of this journey. Together, we're helping every child become a Speech Hero.</p>
        <p>Warm wishes,<br><br>
        Rishi, Priya and Aryan<br>
        The Speech Heroes</p>
      `,
    });

    // Send notification email to admin (your Gmail) when someone signs up
    const notificationEmail = process.env.GMAIL_USER || EMAIL_ADDRESS;
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: notificationEmail,
      subject: "New Newsletter Subscription - The Speech Heroes",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>Hello,</p>
        <p>A new subscriber has signed up for The Speech Heroes newsletter!</p>
        <p><strong>Subscriber Email:</strong> ${subscriberEmail}</p>
        <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
        <p>This is an automated notification from your newsletter subscription system.</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", {
      message: error.message,
      details: error.details || error.toString(),
      stack: error.stack,
    });

    // Provide more specific error messages
    if (error.message && error.message.includes("fetch")) {
      return NextResponse.json(
        {
          error:
            "Unable to connect to the server. Please check your internet connection and try again.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe to newsletter. Please try again later." },
      { status: 500 }
    );
  }
}
