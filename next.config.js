const BundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      'mundobimages.blob.core.windows.net',
      'images.unsplash.com',
      'tailwindui.com',
      'graph.facebook.com',
    ],
  },
  experimental: { images: { layoutRaw: true } },
});
