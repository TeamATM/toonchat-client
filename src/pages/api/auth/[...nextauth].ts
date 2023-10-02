/* eslint-disable no-param-reassign */
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { credentialsLoginAPI } from '@/utils/api/accounts';
// import { credentialsLoginAPI } from '@/utils/api/clientServer';

interface CustomSession extends Session {
  accessToken?: string;
  refreshToken?: string;
}

interface SessionCallback {
  session: CustomSession; token: JWT
}

export const authOptions: NextAuthOptions = {
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000/api'}/members/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          provider: account?.provider,
        }),
      });
      const data = await response.json();
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
      (session as CustomSession).accessToken = token.accessToken as string | undefined;
      (session as CustomSession).refreshToken = token.refreshToken as string | undefined;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      } if (new URL(url).origin === baseUrl) {
        return `${baseUrl}`;
      }
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
