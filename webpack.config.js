var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  mode: "development",
  entry: "./code.ts",
  output: {
    filename: 'distribution/bundle.js'
  },
  devServer: {
    contentBase: __dirname, // the root for the server
    watchContentBase: true, // so we reload if other stuff like CSS changes
    port: 9000, // it'll now be at http://localhost:9000

  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  },
  devtool: 'inline-source-map'
};