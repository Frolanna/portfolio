const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.vue', '**/*.scss', '**/*.css'],
      syntax: 'scss'
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  mode: "development",
  devtool: 'inline-source-map',
  watch: true,
});