const BundleAnalyzer = require('@next/bundle-analyzer');
const nextTranslate = require('next-translate-plugin');

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = () => {
  const plugins = [withBundleAnalyzer, nextTranslate];
  return plugins.reduce((acc, next) => next(acc), {
    images: {
      dangerouslyAllowSVG: true,
      domains: [
        'mundobimages.blob.core.windows.net',
        'images.unsplash.com',
        'tailwindui.com',
        'graph.facebook.com',
        'placebear.com',
      ],
    },
    webpack: (config) => {
      config.resolve.extensionAlias = { '.graphql': ['.graphql.ts'] };
      return config;
    },
  });
};
