import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// const isTokenValid = (token: RequestCookie | undefined) =>
//   token && typeof token.value === 'string' && token.value.length > 0;

export function middleware(request: NextRequest) {
  // const cookie = request.cookies;
  // const token = cookie.get(getCustomAccessTokenKey(getHostname()));
  // const pathName = request.nextUrl.clone().pathname;
  const response = NextResponse;
  return response.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
