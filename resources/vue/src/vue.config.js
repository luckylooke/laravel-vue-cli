const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const dotenv = require('dotenv');
const _ = require('lodash');
dotenv.config();

const SASS_LOADER = 'sass-loader';

module.exports = {
  lintOnSave: false,

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },

  // chainWebpack: config => {

  //   //github.com/vuejs/vue-cli/issues/2099#issuecomment-544877183
  //   ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(rule => {
  //     config.module
  //       .rule('scss')
  //       .oneOf(rule)
  //       .use('resolve-url-loader')
  //       .loader('resolve-url-loader')
  //       .tap(options =>
  //         _.merge(options, {
  //           sourceMap: true,
  //           join: (uri, base) => {
  //             console.log('-=-=-=-=-=-=- uri, base', uri);

  //             return uri;
  //           },
  //         })
  //       )
  //       .before(SASS_LOADER)
  //       .end()
  //       .use(SASS_LOADER)
  //       .loader(SASS_LOADER)
  //       .tap(options =>
  //         _.merge(options, {
  //           sourceMap: true,
  //         })
  //       )
  //       .end();
  //   });

  //   config.module
  //     .rule('fonts')
  //     .test(/\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .tap(options =>
  //       _.merge(options, {
  //         name: '[name].[ext]',
  //         outputPath: 'fonts/',
  //         publicPath: 'assets/fonts/',
  //       })
  //     )
  //     .end();
  // },

  configureWebpack: {
    resolve: {
      alias: {
        ['@ui-lib']: path.resolve(__dirname, 'src/ui-lib/lib'),
      },
    },
    plugins: [new ManifestPlugin()],
  },

  css: {
    loaderOptions: {
      // source: https://stackoverflow.com/a/51475617/861615
      css: {
        url: false,
      },
      scss: {
        includePaths: [
          path.resolve(__dirname, 'src/styles'),
          path.resolve(__dirname, 'src/ui-lib/src/styles'),
        ],
        // include variables into every component
        data: `
          	@import "wsk_vars";
          	@import "wsk_mixins";
			      @import "~quasar/src/css/variables";
        `,
        // implementation: require('node-sass'),

        // bellow API sass-loader@^8.X.X

        // sassOptions: {
        //   includePaths: [path.resolve(__dirname, 'src/styles')],
        // },
        // // include variables and utilities into every component
        // prependData: `
        //   @import "variables";
        //   @import 'wsk_vars';
        //   @import 'wsk_mixins';
        //   @import '~quasar/src/css/variables';
        // `,
      },
    },
  },
};
