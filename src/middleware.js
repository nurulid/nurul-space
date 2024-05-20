import { NextResponse } from 'next/server';
export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname == '/ui-experiments') {
    return NextResponse.redirect(new URL('/ui', req.url));
  }
  return NextResponse.next();
}
