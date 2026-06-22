# D3 Combo Chart

D3 Combo Chart is a D3v4 charts library developed for [HeavyImmerse](https://www.omnisci.com/platform/immerse/). It is in active development, currently at 0.16. We will accept PRs and bug reports once we reach 1.0.0.

The main component is `d3ComboChart.chart`, which is a wrapper for a suite of sub-components, like axis, tooltip, marks, labels, etc. The chart type is nothing more than a configuration option (currently line, area, bar and variants of those).

## Documentation
The [documentation](https://omnisci.github.io/mapd3/doc/index.html) is generated with [documentationjs](http://documentation.js.org/).

The chart API is very simple: instantiate a chart, set configuration, set data, which automatically triggers a render, otherwise explicitely call render.

```javascript
d3ComboChart.Chart(document.querySelector('.chart'))
    .setConfig({
        width: 800,
        height: 400,
        keyType: "time",
        chartType: "line"
    })
    .setData(data)
```
A complete example, including the use of a data generator, is available in this ObservaleHQ Notebook: https://beta.observablehq.com/@biovisualize/mapd3-test-sheet.

## Development
Look in [/package.json](package.json) for the build scripts. It is available as an [npm](https://www.npmjs.com/package/mapd3) package.

If, for some reason, you get errors about `d3/build/d3.js` missing, try running `npm run clean` and `npm install`.

# Third-party vendor licenses

A full list of third-party npm packages and their licenses is maintained in [`license/THIRD_PARTY_LICENSES.md`](license/THIRD_PARTY_LICENSES.md). To regenerate it after dependency changes, run:

```sh
node scripts/generate-third-party-licenses.js
```

This requires `node_modules` to be installed (`npm install`) and uses the `license-checker` devDependency to scan the installed environment.

Every third-party module from npm that gets includes in the final, distributed bundle has its license verified and license text (if provided) or license type shipped in licenses.txt with the bundle. Licenses must be in the pre-approved list of permissive open-source licenses. If it's necessary to override a license for a module because it's missing or improperly tagged in its package.json, add an entry in license-overrides.json.

License descriptions and public license URLs are maintained in licenses.json as well, but they are not verified and might not be up to date.
