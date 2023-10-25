/* eslint-disable consistent-return */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const withAuthList = [
  '/chats', '/chats/:path*',
  '/friends', '/friends/:path*',
  '/community', '/community/:path*',
  '/profile', '/profile/:path*',
];
const withOutAuthList = ['/login', '/signup'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;
  const isWithAuth = pathMatch(pathname, withAuthList);
  const isWithOutAuth = pathMatch(pathname, withOutAuthList);

  if (isWithAuth) return withAuth(req, !!token); // 로그인 여부에 따라 redirect 하는 함수
  if (isWithOutAuth) return withOutAuth(req, !!token); // 로그인 여부에 따라 redirect 하는 함수
}

export const config = {
  mathcher: [...withAuthList, ...withOutAuthList],
};

const withAuth = (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
  return null;
};

const withOutAuth = async (req:NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();

  if (token) {
    url.pathname = '/friends';

    return NextResponse.redirect(url);
  }
};

function pathMatch(path: string, patternList: string[]): boolean {
  return patternList.some((pattern) => {
    const regex = new RegExp(`^${pattern.replace(/:\w+\*/g, '\\w+').replace(/\*/g, '.*')}$`);
    return regex.test(path);
  });
}
