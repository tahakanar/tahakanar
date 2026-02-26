/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    viewTransition: true
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tahakanar.com' }],
        destination: 'https://tahakanar.com/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
