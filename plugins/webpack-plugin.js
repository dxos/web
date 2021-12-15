// const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path');
const { ConfigPlugin } = require('@dxos/config/ConfigPlugin');

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config) {
      return {
        plugins: [
          //   new webpack.ProvidePlugin({
          //     setImmediate: 'setimmediate'
          //  }), 
          new ConfigPlugin({
            path: path.resolve(__dirname, 'config'),
            dynamic: process.env.CONFIG_DYNAMIC
          }),
          new NodePolyfillPlugin()
        ],
        // resolve: {
        //   fallback: {
        //     setimmediate: require.resolve('setimmediate'),
        //   },
        // },
      };
    },
  };
};