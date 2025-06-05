module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            // Your desired browser targets, matching your browserslist from package.json
            "last 2 versions",
            "not dead"
          ]
        },
        modules: false, // This is crucial for Webpack tree-shaking
        useBuiltIns: "usage", // <--- ADDED: From your old .babelrc
        corejs: 3 // <--- IMPORTANT: Required when useBuiltIns is 'entry' or 'usage' in Babel 7
      }
    ]
  ],
  plugins: [
    // This plugin (@babel/plugin-proposal-object-rest-spread) handles the object rest/spread
    // functionality. In Babel 7, @babel/preset-env includes support for it by default
    // when targeting environments that need it. However, since you explicitly had it
    // in your old config, it's safer to include the plugin directly to ensure compatibility.
    "@babel/plugin-proposal-object-rest-spread" // <--- ADDED: From your old .babelrc
  ]
};
