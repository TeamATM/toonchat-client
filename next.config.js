/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SOCKET_URL: process.env.SOCKET_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
