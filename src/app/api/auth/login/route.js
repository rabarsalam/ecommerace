import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const { data } = await axios.post(`${process.env.BACKEND_URL}/api/auth/signin`, {
      email,
      password,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    const token = data?.token;

    if (!token) {
      return NextResponse.json({ error: "No token received" }, { status: 500 });
    }

    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24 * 7, 
      path: "/",
    });

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: error.response?.status || 500 });
  }
}
