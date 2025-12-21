export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { users } from "@/lib/userStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, image } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const exists = users.find((u) => u.email === email);
    if (exists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    users.push({
      id: Date.now(),
      name,
      email,
      password,
      image,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
