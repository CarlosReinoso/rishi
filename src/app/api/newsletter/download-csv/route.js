import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    // Create a Supabase client with cookies for authentication
    const cookieStore = await cookies();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    });

    // Check if user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Fetch all newsletter subscribers
    const { data: subscribers, error } = await supabase
      .from("newsletter_subscribers")
      .select("email, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    // Convert to CSV format
    const csvHeader = "Email,Created At\n";
    const csvRows = subscribers
      .map((subscriber) => {
        const email = subscriber.email;
        const createdAt = new Date(subscriber.created_at).toISOString();
        return `${email},${createdAt}`;
      })
      .join("\n");

    const csvContent = csvHeader + csvRows;

    // Return CSV file
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error downloading newsletter CSV:", error);
    return NextResponse.json(
      { error: "Failed to download newsletter CSV" },
      { status: 500 }
    );
  }
}

