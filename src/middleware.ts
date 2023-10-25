// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/chats/:path*', '/friends/:path*', '/community/:path*', '/profile/:path*'],
};
