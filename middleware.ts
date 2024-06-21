import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.TOKENKEY);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const tokenCookie = req.cookies.get("UserID");

  if (tokenCookie) {
    const token = tokenCookie.value; // Extract the token string
    console.log('Retrieved token:', token); // Log the token for debugging
    try {
      // Verify the token using jose
      const { payload } = await jwtVerify(token, secret);
      console.log('User:', payload);
    } catch (err) {
      console.log('JWT Verification Error:', err);
      // Handle the malformed token scenario (optional: redirect or respond with an error)
      if (pathname === "/admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  } else if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/admin"],
};
