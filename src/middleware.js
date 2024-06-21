import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Ensure the x-forwarded-host header is correctly set
  if (url.hostname === 'localhost') {
    request.headers.set('x-forwarded-host', 'super-duper-umbrella-jj5777w4g774fvr-3000.app.github.dev');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
