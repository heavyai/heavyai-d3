const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // NEW: For CSS minification in Webpack 5
const TerserPlugin = require("terser-webpack-plugin"); // NEW: TerserPlugin (no JS suffix for modern Webpack)

const bundleIndexPath = path.resolve("./src/bundle.js");

const config = env => {
  const isProduction = !!env.production;
  const isDevelopment = !!env.development;

  return {
    mode: isProduction ? 'production' : 'development',

    entry: {
      d3ComboChart: bundleIndexPath
    },

    // devtool: 'source-map' is generally CSP-compliant for production in Webpack 5.
    // 'eval' variants should be avoided for CSP.
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map', // Use 'source-map' or 'false' for prod. 'cheap-module-source-map' for dev is common.

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].min.js" : "[name].js",
      library: "[name]",
      libraryTarget: "umd",
      // Webpack 5: automatically cleans the output directory
      clean: true, // NEW: Automatically cleans the `dist` folder before build
      // Webpack 5: chunkFilename and publicPath defaults are often good.
      // jsonpFunction is replaced by chunkLoading and chunkFormat
      // For UMD libraries, often not necessary to set chunkLoading explicitly,
      // as it's typically tied to the libraryTarget.
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
            loader: "babel-loader" // Ensure babel.config.js is correct for Babel 7
          }
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        // NEW: Webpack 5 Asset Modules (replace file-loader, url-loader, raw-loader)
        // These handle images, fonts directly.
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i, // Combined image and font extensions
          type: 'asset/resource', // Automatically decide between inline and resource
          generator: {
            filename: 'assets/[name][ext][query]' // Output path for assets
          },
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024 // 8kb (inline assets smaller than this)
            }
          }
        },
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? "[name].min.css" : "[name].css",
        chunkFilename: isProduction ? "[id].min.css" : "[id].css"
      }),
      // Removed webpack.optimize.UglifyJsPlugin()
      // Removed OptimizeCSSAssetsPlugin (replaced by CssMinimizerPlugin in optimization)
    ],

    optimization: {
        minimize: isProduction, // Enable minification only in production
        minimizer: [
            // For JS minification
            new TerserPlugin({
                parallel: true, // Enable multi-process parallel running
                terserOptions: {
                    compress: {
                        // Your existing compress options:
                        dead_code: true,
                        warnings: false,
                        comparisons: false
                    },
                    // Ensure sourceMap is configured for TerserPlugin directly
                    // based on devtool setting. Webpack 5 defaults to reading devtool.
                    sourceMap: isProduction // Only generate source map for minified code if needed
                }
            }),
            // For CSS minification
            new CssMinimizerPlugin(), // NEW: Uses cssnano by default
        ],
        // Default splitChunks behavior in Webpack 5 is improved and often sufficient.
        // If you need custom vendor chunking, re-add:
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             name: "vendor",
        //             test: /[\\/]node_modules[\\/]/,
        //             chunks: "all"
        //         }
        //     }
        // }
    },

    // NEW: Webpack 5 fallback for Node.js core modules
    // This is crucial if your dependencies still try to import Node.js built-in modules
    // (like 'os', 'stream', 'path', 'buffer', 'util', 'assert', 'url', 'crypto', 'fs')
    // We already did this for the main app, but it's good to have here too if this lib itself needs it.
    resolve: {
        fallback: {
            "os": require.resolve("os-browserify/browser"),
            // Add other polyfills here if other errors appear:
            // "stream": require.resolve("stream-browserify"),
            // "path": require.resolve("path-browserify"),
            // "buffer": require.resolve("buffer/"),
            // "util": require.resolve("util/"),
            // "assert": require.resolve("assert/"),
            // "url": require.resolve("url/"),
            // "crypto": require.resolve("crypto-browserify"),
            // "fs": false, // Set to false if you don't need 'fs' in the browser
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.geojson'], // Ensure all extensions are here
        symlinks: false,
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            // Your existing aliases
        }
    }
  };
};

module.exports = config;
