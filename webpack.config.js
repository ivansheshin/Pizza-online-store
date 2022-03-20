const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);
// Добавить спрайт лоадер и замутить спрайты
const cssLoaders = (extra) => {
  const loaders = [{
    loader: MiniCssExtractPlugin.loader,
  },
  'css-loader',
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'app'),
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: isProd,
  },
  optimization: optimization(),
  resolve: {
    alias: {
      Style: path.resolve(__dirname, 'app/scss'),
      Script: path.resolve(__dirname, 'app/js'),
      Data: path.resolve(__dirname, 'app/data'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: './cart.html',
      filename: 'cart.html',
      inject: 'body',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'app/img'), to: path.resolve(__dirname, 'dist/img') },
      ],
    }),
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: cssLoaders('sass-loader'),
    },
    {
      test: /\.(png|svg|jpeg|gif|jpg)$/,
      use: ['file-loader'],
    },
    {
      test: /\.(ttf|woff|woff2)$/,
      use: ['file-loader'],
    },
    ],
  },
};
