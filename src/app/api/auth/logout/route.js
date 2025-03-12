import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  
  cookies().delete("token", {
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production", 
    sameSite: "Strict", 
    path: "/",
  });

  
}
