/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/use/get-started',
        destination: '/use/get-started/installation',
        permanent: false,
      },
      {
        source: '/learn/whitepaper',
        destination: '/learn/whitepaper/introduction',
        permanent: false,
      },
      {
        source: '/developers/documentation',
        destination: '/developers/documentation/rpc_chain',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
