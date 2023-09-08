const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@UI': path.resolve(__dirname, 'src/UI'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
};
