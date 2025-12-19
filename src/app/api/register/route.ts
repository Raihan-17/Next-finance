import { NextResponse } from "next/server";

import { users } from "@/src/lib/userStore";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password, image } = body;

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = { id: Date.now(), name, email, password, image };
  users.push(newUser);

  return NextResponse.json({ success: true });
}