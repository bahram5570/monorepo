import { EXCLUDE_EXTENSIONS, OLD_OPEN_APP_LINKS } from '@constants/links.constants';
import { type NextRequest, NextResponse } from 'next/server';

import http from '@services/http';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // # Skips middleware processing for non-page paths like Next.js assets, public files, favicon, or file extensions
  if (
    pathname === '/favicon.ico' ||
    pathname.startsWith('/_next') ||
    EXCLUDE_EXTENSIONS.some((ext) => pathname.endsWith(`.${ext}`))
  ) {
    return response;
  }

  // # Redirects outdated 'terms' page links from older app versions to the correct URL
  if (OLD_OPEN_APP_LINKS.includes(pathname)) {
    return NextResponse.redirect(new URL('/terms', request.url));
  }

  // # To enable embedding the app in iframes for paths starting with '/webView'.
  if (request.nextUrl.pathname.startsWith('/webView')) {
    response.headers.set('X-Frame-Options', 'ALLOWALL');
    response.headers.set('Content-Security-Policy', 'frame-ancestors *');
    return response;
  }

  if (pathname !== '/' && pathname.endsWith('/')) {
    const newPath = pathname.slice(0, -1);
    return NextResponse.redirect(new URL(newPath, request.url), { status: 301 });
  }

  try {
    const uri = pathname.startsWith('/') && pathname.replace('/', '');
    const { data } = await http<{
      url: string;
      status: number;
      valid: boolean;
      redirect: string;
    }>({ url: `support/redirection?Uri=${uri}`, cache: 'force-cache', revalidate: 3600 });

    if (data && data.valid) {
      const newUrl = `${request.nextUrl.origin}/${data.redirect}`;
      return NextResponse.redirect(newUrl, { status: data.status });
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};
