/** @type {import('next).NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build (use cautiously)
  },
};

module.exports = nextConfig;
