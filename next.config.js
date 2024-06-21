/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'super-duper-umbrella-jj5777w4g774fvr-3000.app.github.dev'
      ],
    },
  },
};

module.exports = nextConfig;