/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/earth",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
