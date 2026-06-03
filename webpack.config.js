// SPDX-FileCopyrightText: Copyright (c) 2026, NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const bundleIndexPath = path.resolve("./src/bundle.js");
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require("autoprefixer");
const discardComments = require("postcss-discard-comments");

const postcssPlugins = [autoprefixer, discardComments];

const LICENSE_BANNER = `SPDX-FileCopyrightText: Copyright (c) 2026, NVIDIA CORPORATION & AFFILIATES. All rights reserved.
SPDX-License-Identifier: Apache-2.0`;

const config = env => {
  if (env.prod) {
    return {
      mode: "production",

      entry: {
        d3ComboChart: bundleIndexPath
      },

      devtool: "source-map",

      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
        library: "[name]",
        libraryTarget: "umd"
      },

      externals: {
        "d3/build/d3": "d3/build/d3"
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|doc|dist)/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(sass|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: postcssPlugins
                }
              },
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new TerserPlugin(),
        new webpack.BannerPlugin({
          banner: LICENSE_BANNER,
          test: /\.css$/
        })
      ]
    };
  } else if (env.dev) {
    return {
      mode: "development",

      entry: {
        d3ComboChart: bundleIndexPath
      },

      devtool: "eval",

      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd"
      },

      externals: {
        // "d3/build/d3": "d3/build/d3"
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|doc|dist)/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(sass|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: postcssPlugins
                }
              },
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new webpack.BannerPlugin({
          banner: LICENSE_BANNER,
          test: /\.css$/
        })
      ]
    };
  } else {
    return;
  }
};

module.exports = config;
