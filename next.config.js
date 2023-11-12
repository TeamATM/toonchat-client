// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const config = {
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
    ];
  },
  images: {
    minimumCacheTTL: 86400, // 60*60*24 : 1일
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.webtoonchat.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    // ENV는 ['local', 'development', 'production'] 중 하나
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,

    // 필요할 때 끌어다 쓴 토큰
    SSR_TOKEN: process.env.SSR_TOKEN,

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

const nextConfig = withPWA({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
  ],
  disableDevLogs: true,
})(config);

module.exports = nextConfig;
