/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
