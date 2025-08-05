/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'weareimpo.ir',
      },
      {
        protocol: 'https',
        hostname: 'media.weareimpo.ir',
      },
      {
        protocol: 'https',
        hostname: 'stage.weareimpo.ir',
      },
      {
        hostname: '195.88.208.143',
      },
    ],
  },

  // headers: async () => [
  //   {
  //     source: '/:path*.(jpg|jpeg|png|webp|gif|svg)',
  //     headers: [
  //       { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
  //       { key: 'Pragma', value: 'no-cache' },
  //       { key: 'Expires', value: '0' },
  //     ],
  //   },
  //   {
  //     source: '/_next/image',
  //     headers: [
  //       { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
  //       { key: 'Pragma', value: 'no-cache' },
  //       { key: 'Expires', value: '0' },
  //     ],
  //   },
  // ],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
