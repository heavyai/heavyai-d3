const webpack = require("webpack");
const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); // REMOVE: Replaced by MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // NEW: Import MiniCssExtractPlugin
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // NEW: For CSS minification
const TerserJSPlugin = require("terser-webpack-plugin"); // NEW: For JS minification in Webpack 4+
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // REMOVE: Replaced by Terser

const bundleIndexPath = path.resolve("./src/bundle.js");

const config = env => {
  // Webpack 4 introduces the 'mode' option
  // It handles many optimizations automatically
  const isProduction = !!env.production; // Ensure boolean
  const isDevelopment = !!env.development; // Ensure boolean

  // Common configuration for both production and development
  const commonConfig = {
    // 1. Mode: REQUIRED in Webpack 4
    mode: isProduction ? 'production' : 'development',

    entry: {
      d3ComboChart: bundleIndexPath
    },

    // 2. devtool: Production should generally use 'source-map' or false for CSP compliance
    //    Development often uses faster options.
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', // 'source-map' for prod, faster for dev

    output: {
      path: path.resolve(__dirname, "dist"),
      // 3. Filename for prod/dev
      filename: isProduction ? "[name].min.js" : "[name].js",
      library: "[name]",
      libraryTarget: "umd",
      // Add these specific options to prevent eval() for module execution
      // and ensure CSP compliance for webpack's internal logic.
      devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // Or a more basic template
      devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
      // Crucial: Set this to 'window' or 'global' to avoid eval-based function wrappers
      // (This sometimes works for this specific eval() problem in Webpack 4)
      // Defaults to 'jsonp' which might use eval in some cases.
      jsonpFunction: 'webpackJsonpd3ComboChart', // Use a unique name for your library
    },

    externals: {
      "d3/build/d3": "d3/build/d3" // Assuming d3 is still external
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|doc|dist)/,
          use: {
            loader: "babel-loader" // Ensure babel.config.js or .babelrc is configured for Babel 7
          }
        },
        {
          test: /\.(sass|scss)$/,
          // 4. MiniCssExtractPlugin.loader replaces ExtractTextPlugin.extract
          use: [
            MiniCssExtractPlugin.loader, // New loader for extracting CSS
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({ // New plugin for extracting CSS
        filename: isProduction ? "[name].min.css" : "[name].css",
        chunkFilename: isProduction ? "[id].min.css" : "[id].css"
      }),
      // 5. No need for webpack.optimize.UglifyJsPlugin() here anymore
      //    Minification handled by optimization.minimizer
    ],

    // 6. Optimization: New section in Webpack 4+
    optimization: {
        minimizer: [
            // For JS minification (replaces UglifyJsPlugin)
            new TerserJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: isProduction // Only generate source map for minified code if needed
            }),
            // For CSS minification (replaces part of ExtractTextPlugin functionality)
            new OptimizeCSSAssetsPlugin({})
        ],
        // Default splitChunks behaviour is often good, but you can configure
        // You had a 'vendor' cacheGroup, which is default behavior in Webpack 4 production mode
        // For now, let's rely on Webpack 4's defaults for simplicity unless needed
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             name: "vendor",
        //             test: /[\\/]node_modules[\\/]/,
        //             chunks: "all"
        //         }
        //     }
        // }
    }
  };

  // Return the common config
  return commonConfig;
};

module.exports = config;
