const path = require('path');

module.exports = {
  transpileDependencies: ['@ebury/chameleon-components'],
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      files: [
        './src/**/*.{vue,html,css}',
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: 'sass',
      },
    },
    extract: { filename: 'css/[name].css' },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'));

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => ({
        ...options,
        transformAssetUrls: {
          ...options.transformAssetUrls,
        },
      }));
  },
};
