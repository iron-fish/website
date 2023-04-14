//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
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
};

module.exports = withNx(nextConfig);
