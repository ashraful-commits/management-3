import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export function middleware(req) {
  const path = req.nextUrl.pathname
  const isPublicPath = path === "/login" || path === "/signup"
  if (path.startsWith("/api/auth")) {
    return
  }
  if (
    path === "/api/signin" ||
    path === "/api/login" ||
    path === "/api/signup" ||
    path === "/api/userExists"
  ) {
    return
  }

  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value ||
    ""

  if (isPublicPath) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.nextUrl))
    }
  } else {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl))
    }
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/project",
    "/training",
    "/user/:path*",
    "/client/:path*",
    "/company/:path*",
    "/sales/:path*",
    "/settings/:path*",
    "/[[...slug]]",
    "/reset-password",
    "/api/:path*",
  ],
}
