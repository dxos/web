// const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path');
const webpack = require('webpack');
const { ConfigPlugin } = require('@dxos/config/ConfigPlugin');

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config) {
      console.log('- config', config);
      return {
        module: {
          rules: [
            // { 
            //   test: /\.js$/, 
            //   exclude: /node_modules/, 
            //   loader: "babel-loader" 
            // },
            // {
            //   test: /\.css$/i,
            //   use: ['style-loader', 'css-loader'],
            // },
            {
              test: /\.(png|svg|jpe?g|gif)$/,
              include: /images/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                  }
                }
              ]
            },
          ]
        },
      
        plugins: [
          new ConfigPlugin({
            path: path.resolve(__dirname, 'config'),
            dynamic: process.env.CONFIG_DYNAMIC
          }),
          /**
           * The package sodium-javascript, used on our packages, has a critical dependency issue.
           * This issue is throwing a warning on the build output, and causing the CI to fail.
           * The plugin below allows us to match the package during compilation and "acknowledge" the warning by ourselves.
           * We are "acknowledging" every "critical" warning.
           */
          new webpack.ContextReplacementPlugin(/\/node_modules\//, (data) => {
            data.dependencies.forEach(dependency => delete dependency.critical)
            return data;
          }),
          new NodePolyfillPlugin()
        ],
        resolve: {
          fallback: {
            fs: false
          },
        },
        node: {
          __dirname: true
        },
        externals: {
          fatfs: 'fatfs',
          runtimejs: 'runtimejs',
          wrtc: 'wrtc',
          bip32: 'bip32',
          typeforce: 'typeforce',
          'sodium-universal': 'sodium-universal'
        }
      };
    },
  };
};