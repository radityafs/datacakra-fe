import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const route = request.nextUrl.pathname;
  const PUBLIC_FILE = /\.(.*)$/;

  if (
    route.startsWith("/_next") || // exclude Next.js internals
    route.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(route) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  if (token && route.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && !route.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
