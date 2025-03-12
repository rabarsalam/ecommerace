import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// Middleware for internationalized routing
const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // Run internationalization middleware first (make sure it's awaited)
  const intlResponse = await intlMiddleware(req);
  if (intlResponse) return intlResponse;

  // Auth middleware: Protect specific routes
  const token = req.cookies.get("token")?.value;
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  // Check if the request is for a protected route
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      // Redirect to login if no token is found
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to all relevant paths
export const config = {
  matcher: [
    "/",
    "/(ar|en|ku)/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
  ],
};
