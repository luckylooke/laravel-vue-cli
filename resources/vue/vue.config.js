const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");

// const SASS_LOADER = 'sass-loader';

module.exports = {
  lintOnSave: false,

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {}
  },

  // chainWebpack: config => {

  //   // Source: github.com/vuejs/vue-cli/issues/2099#issuecomment-544877183
  //
  //   ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(rule => {
  //     config.module
  //       .rule('scss')
  //       .oneOf(rule)
  //       .use('resolve-url-loader')
  //       .loader('resolve-url-loader')
  //       .tap(options =>
  //         _.merge(options, {
  //           sourceMap: true,
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
        ["@ui-library"]: path.resolve(__dirname, "src/ui-library/lib")
      }
    },
    plugins: [new ManifestPlugin()]
  },

  css: {
    loaderOptions: {
      // source: https://stackoverflow.com/a/51475617/861615
      // css: {
      //   url: false
      // },
      scss: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, "./src/styles"),
            path.resolve(__dirname, "./src/ui-library/styles")
          ]
        },
        // include variables into every component
        prependData: `
          	@import "ui-lib_vars";
        `
      }
    }
  }
};
