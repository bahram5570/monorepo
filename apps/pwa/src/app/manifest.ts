import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ایمپو',
    short_name: 'ایمپو',
    description: 'ایمپو',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    icons: [
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'any',
      },
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '180x180',
      },
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '152x152',
      },
      {
        src: '/assets/manifest/impo.webp',
        type: 'image/png',
        sizes: '120x120',
      },
    ],
  };
}
