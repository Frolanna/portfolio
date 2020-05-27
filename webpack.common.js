const path = require("path");
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "js", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
        include: [
          path.resolve(__dirname, './src/styles')
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      }
    ])
  ]
};