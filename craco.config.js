const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },

    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = './src/index.tsx';
      return webpackConfig;
    },
  },
};