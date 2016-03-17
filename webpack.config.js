const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot', 
          'babel',
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss|css|sass)$/,
        // loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
      },
    ],
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
