/* eslint-disable no-param-reassign */
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { credentialsLoginAPI, refreshAccessToken, socialLoginAPI } from '@/utils/api/accounts';
import { isTokenExpired } from '@/utils/services/auth';

interface CustomSession extends Session {
  accessToken: string | null;
  refreshToken: string | null;
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

        console.log('authorize', data);

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
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
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

      // accessToken 만료를 검사합니다.
      if (token.accessToken && isTokenExpired(token.accessToken as string)) {
        // 만료된 경우 refreshToken으로 새 accessToken을 발급
        const newToken = await refreshAccessToken(token.refreshToken as string);

        console.log('newAccessToken -- jwt', newToken);

        if (newToken) {
          token.accessToken = newToken.accessToken; // 새로운 accessToken으로 업데이트
          token.refreshToken = newToken.refreshToken; // 새로운 accessToken으로 업데이트
        } else {
        // TODO: refresh token 만료시 추가 처리
        // refreshToken도 만료되었거나 문제가 있을 경우
        // 필요한 추가 처리 (로그아웃)를 여기에다가 작성
        }
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
