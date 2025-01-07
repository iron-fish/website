/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/search/documentation": ["./content/**/*"],
    },
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development"

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: `
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://network.us20.list-manage.com;
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
${isDev ? '' : 'upgrade-insecure-requests;'}
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/company/about-us",
        permanent: true,
      },
      {
        source: "/use/get-started/cli-how-to-use",
        destination: "/developers/documentation/install-npm",
        permanent: true,
      },
      {
        source: "/use/get-started/installation",
        destination: "/developers/documentation/install-npm",
        permanent: true,
      },
      {
        source: "/use/get-started/cli-cmd-start",
        destination:
          "/developers/documentation/run-a-node",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/learn/faq",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "https://jobs.lever.co/ironfish",
        permanent: false,
      },
      {
        source: "/use/get-started",
        destination: "/get-started",
        permanent: false,
      },
      {
        source: "/learn/get-started",
        destination: "/get-started",
        permanent: false,
      },
      {
        source: "/learn/whitepaper",
        destination: "/learn/whitepaper/introduction",
        permanent: false,
      },
      {
        source: "/developers/documentation",
        destination: "/developers/documentation/install-npm",
        permanent: false,
      },
      {
        source: "/community/grants",
        destination: "/community/grants/how_to_apply",
        permanent: false,
      },
      {
        source: "/use/wallet",
        destination: "/use/node-app",
        permanent: true,
      },
      {
        source: "/docs/onboarding/iron-fish-tutorial",
        destination: "/developers/documentation/install-npm",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/1_introduction",
        destination: "/learn/whitepaper/introduction",
        permanent: true,
      },
      {
        source: "/docs/onboarding/installation-iron-fish",
        destination: "/developers/documentation/install-npm",
        permanent: true,
      },
      {
        source: "/docs/onboarding/miner-iron-fish",
        destination: "/use/get-started/mining",
        permanent: true,
      },
      {
        source: "/tokenomics",
        destination: "/learn/tokenomics",
        permanent: true,
      },
      {
        source: "/docs/onboarding/iron-fish-wallet-commands",
        destination: "/developers/documentation/cli-help",
        permanent: true,
      },
      {
        source: "/docs/onboarding/start-an-iron-fish-node",
        destination: "/developers/documentation/run-a-node",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/4_mining",
        destination: "/learn/whitepaper/mining",
        permanent: true,
      },
      {
        source: "/docs/onboarding/iron-fish-cli",
        destination: "/developers/documentation/cli-help",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/5_account",
        destination: "/learn/whitepaper/account",
        permanent: true,
      },
      {
        source: "/docs/onboarding/send-receive-iron-fish-transactions",
        destination: "/developers/documentation/transactions",
        permanent: true,
      },
      {
        source: "/docs/onboarding/iron-fish-node-health",
        destination: "/developers/documentation/node-health",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/3_storage",
        destination: "/learn/whitepaper/storage",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/7_consensus_verification",
        destination: "/learn/whitepaper/consensus-verification",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/2_networking",
        destination: "/learn/whitepaper/networking",
        permanent: true,
      },
      {
        source: "/docs/whitepaper/6_transaction",
        destination: "/learn/whitepaper/transaction",
        permanent: true,
      },
      {
        source: "/docs/onboarding/rpc/chain",
        destination:
          "/developers/documentation/rpc/chain/broadcast_transaction",
        permanent: true,
      },
      {
        source: "/docs/onboarding/rpc/node",
        destination: "/developers/documentation/rpc/node/get_log_stream",
        permanent: true,
      },
      {
        source: "/use/get-started/multisig-creation",
        destination: "/developers/documentation/multisig-creation-tdk",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
