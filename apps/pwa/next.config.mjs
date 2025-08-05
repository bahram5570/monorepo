/** @type {import('next').NextConfig} */

const imageList = [
  'https://shut.ir',
  'https://c.mql5.com',
  'https://cdn.nody.ir',
  'https://weareimpo.ir',
  'https://media.weareimpo.ir',
  'https://stage.weareimpo.ir',
  'https://c328642.parspack.net',
  'https://cdn.downloadefilm.ir',
  'https://encrypted-tbn0.gstatic.com',
  'https://s3.ir-tbz-sh1.arvanstorage.ir',
  'https://impo.s3.ir-tbz-sh1.arvanstorage.ir',
];

const remotePatternMaker = (list) => {
  return list.map((img) => ({ pathname: '/**', hostname: img.split('//')?.[1]?.split(':')?.[0] || '' }));
};

const nextConfig = {
  images: {
    remotePatterns: remotePatternMaker(imageList),
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
