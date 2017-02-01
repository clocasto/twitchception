const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const APP_DIR = path.resolve(__dirname, 'browser');

console.log(chalk.red('process.env.NODE_ENV'), process.env.NODE_ENV);

const config = {
  devtool: PROD ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  cache: true,
  entry: path.join(APP_DIR, '/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle.css'),
  ] : [new ExtractTextPlugin('bundle.css')],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: APP_DIR,
      query: {
        cacheDirectory: true,
        presets: ['latest', 'stage-3', 'react'],
      },
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
};

module.exports = config;
