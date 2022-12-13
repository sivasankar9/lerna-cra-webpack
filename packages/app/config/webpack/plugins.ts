/* istanbul ignore file */

import * as webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const path = require('path');

// import html from './html';

process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

const client: webpack.WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    // plugin for inserting scripts automatically into html
    template: path.resolve(
      __dirname,
      './studio/local/index.html'
    ),
    filename: 'index.html',
  }),

  
  new MiniCssExtractPlugin({
    // plugin for controlling how compiled css will be outputted and named
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];

if (process.env.NODE_ENV === 'production') {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  );
} else {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  );
}

export default client;
