import { NextResponse } from 'next/server';
export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname == '/ui-experiments') {
    return NextResponse.redirect(new URL('/ui/#badge', req.url));
  }
  if (pathname == '/writing') {
    return NextResponse.redirect(new URL('/writings', req.url));
  }
  return NextResponse.next();
}
