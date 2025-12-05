import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    // Create a Supabase client for server-side operations
    // Use service role key if available (bypasses RLS), otherwise use anon key
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Insert email into newsletter_subscribers table
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: email.toLowerCase().trim() }])
      .select()
      .single();

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}

