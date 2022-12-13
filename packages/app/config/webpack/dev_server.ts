/* istanbul ignore file */

import { Configuration } from 'webpack-dev-server';

import resolvePath from './path';

const devServer: Configuration = {
  port: 8080,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  static: {
    directory: resolvePath('public'),
  },
};

export default devServer;
