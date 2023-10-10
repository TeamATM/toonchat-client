/* eslint-disable no-param-reassign */
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { credentialsLoginAPI, socialLoginAPI } from '@/utils/api/accounts';

interface CustomSession extends Session {
  accessToken: string | null;
  refreshToken: string | null;
}

interface SessionCallback {
  session: CustomSession; token: JWT
}

export const authOptions: NextAuthOptions = {
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax', // 'lax' 또는 'strict' 또는 'none'
        path: '/',
        secure: true,
        domain: '.webtoonchat.com', // 여기에 쿠키를 사용하려는 주 도메인을 입력하세요.
      },
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),

    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
    }),

    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'test-email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const data = await credentialsLoginAPI({
          email: credentials?.email || '',
          password: credentials?.password || '',
          provider: 'credential',
        });

        if (data.nickname && data.accessToken) {
          const user = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            name: data.nickname,
            image: data.profileUrl,
            email: credentials?.email,
            id: data.memberId,
          };
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.type === 'credentials') return true;
      console.log('user', user);
      console.log('account', account);
      const data = await socialLoginAPI({
        email: user.email || '',
        name: user.name || '',
        provider: account?.provider || '',
        password: null,
      });

      console.log('data', data);

      if (data?.accessToken && data?.refreshToken) {
        user.accessToken = data.accessToken;
        user.refreshToken = data.refreshToken;
        return true;
      }

      return false;
    },

    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      if (user?.refreshToken) {
        token.refreshToken = user.refreshToken;
      }
      return token;
    },

    async session({ session, token }: SessionCallback) {
      (session as CustomSession).accessToken = token.accessToken as string | null;
      (session as CustomSession).refreshToken = token.refreshToken as string | null;
      return session;
    },

    async redirect({ url, baseUrl }) {
      console.log('Redirect URL:', url);
      console.log('Base URL:', baseUrl);
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      } if (new URL(url).origin === baseUrl) {
        return `${url}`;
      }
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
