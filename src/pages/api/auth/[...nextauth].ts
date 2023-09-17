import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { credentialsLoginAPI } from '@/utils/api/clientServer';

export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'email', type: 'text', placeholder: 'test-email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const user = await credentialsLoginAPI({
          username: credentials?.username || '',
          password: credentials?.password || '',
        });
        if (user.name && user.accessToken) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
