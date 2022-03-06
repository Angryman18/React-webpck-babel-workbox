const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");
const dotenv = require("dotenv-webpack");
const CopyWebpack = require("copy-webpack-plugin");
const {InjectManifest} = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle[contenthash].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new cssMinimizerWebpackPlugin(), new terserWebpackPlugin()],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new miniCssExtractPlugin({ filename: "[contenthash].css" }),
    new dotenv({
      path: './.env.production',
      systemvars: true,
    }),
    new CopyWebpack({
      patterns: [
        {from: './public/logo192.png', to: ''},
        {from: './public/logo512.png', to: ''},
        {from: './public/favicon.ico', to: ''},
        {from: './public/manifest.json', to: ''},
      ]
    }),
    new InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js",
    })
  ],
};
