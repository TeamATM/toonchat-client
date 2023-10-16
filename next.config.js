/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400, // 60*60*24 : 1일
  },
  env: {
    // ENV는 ['local', 'development', 'production'] 중 하나
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,

    // 필요할 때 끌어다 쓴 토큰
    EXAMPLE_TOKEN: process.env.EXAMPLE_TOKEN,

    // NEXT-AUTH 설정에 필요한 값
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    // 서버 URL
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_CLIENT_SERVER_URL: process.env.NEXT_PUBLIC_CLIENT_SERVER_URL,

    // 소셜 로그인
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,

    NEXT_PUBLIC_NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    NEXT_PUBLIC_NAVER_CLIENT_SECRET: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,

    NEXT_PUBLIC_KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    NEXT_PUBLIC_KAKAO_CLIENT_SECRET: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,

  },
};

module.exports = nextConfig;
