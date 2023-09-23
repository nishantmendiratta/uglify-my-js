const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // entry: './sample.js',
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].bundle.min.js',
    // filename: PROD ? '[name].bundle.min.js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
            warnings: false,
          },
          toplevel: true,
          keep_classnames: undefined,
          keep_fnames: false,
          nameCache: null,
          output: {
            beautify: false,
            comments: false,
          },
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
};
