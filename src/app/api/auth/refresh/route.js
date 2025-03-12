import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

export async function POST() {
  try {
    const cookieStore = cookies(); 
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ message: "No refresh token provided" }, { status: 401 });
    }

    const payload = jwt.verify(refreshToken, REFRESH_SECRET);
    
    const newAccessToken = jwt.sign(
      { username: payload.username },
      SECRET_KEY,
      { expiresIn: "15m" }
    );

    return NextResponse.json({ accessToken: newAccessToken });

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return NextResponse.json({ message: "Refresh token expired" }, { status: 403 });
    } else if (error.name === "JsonWebTokenError") {
      return NextResponse.json({ message: "Invalid refresh token" }, { status: 403 });
    } else {
      console.error("Server Error:", error);
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
  }
}
