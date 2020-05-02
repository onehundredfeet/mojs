'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = (argv) => ({
  entry: './src/mojs.babel.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [
      '.js',
      '.babel.js',
      '.coffee'
    ]
  },
  module: {
    rules: [{
      test: /\.(babel.js)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.coffee$/,
      use: {
        loader: 'coffee-loader',
        options: {
          bare: true
        }
      },
      exclude: /node_modules/
    }]
  }
});