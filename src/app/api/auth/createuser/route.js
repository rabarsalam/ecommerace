import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const SECRET_KEY = process.env.JWT_SECRET ; 

export async function POST(req) {
  try {
    const { fullName, email, password, confirmPassword, phone } = await req.json();

    if (!fullName || !email || !password || !confirmPassword || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now(),
      fullName,
      email,
      password: hashedPassword,
      phone,
    };

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    const response = NextResponse.json(
      { message: "User created successfully", user: { id: newUser.id, fullName, email, phone } },
      { status: 201 }
    );
    response.headers.set("Set-Cookie", cookie);

    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
