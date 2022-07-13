const BundleAnalyzer = require('@next/bundle-analyzer');
const nextTranslate = require('next-translate');

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
  const plugins = [withBundleAnalyzer, nextTranslate];
  return plugins.reduce((acc, next) => next(acc), {
    images: {
      domains: [
        'mundobimages.blob.core.windows.net',
        'images.unsplash.com',
        'tailwindui.com',
        'graph.facebook.com',
        'placebear.com',
      ],
    },
    experimental: { images: { allowFutureImage: true } },
  });
};
