# D3 Combo Chart
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/heavyai/heavyai-d3/blob/master/LICENSE)
[![Security](https://img.shields.io/badge/Security-Report%20a%20Vulnerability-red.svg)](https://github.com/heavyai/heavyai-d3/blob/master/SECURITY.md)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?logo=github)](https://github.com/orgs/heavyai/discussions)



D3 Combo Chart is a D3v4 charts library developed for [HeavyImmerse](https://www.heavy.ai/). It is in active development, currently at 0.16. We will accept PRs and bug reports once we reach 1.0.0.

The main component is `d3ComboChart.chart`, which is a wrapper for a suite of sub-components, like axis, tooltip, marks, labels, etc. The chart type is nothing more than a configuration option (currently line, area, bar and variants of those).

## Documentation
The [documentation](https://heavyai.github.io/heavyai-d3/doc/index.html) is generated with [documentationjs](http://documentation.js.org/).

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

## Development
Look in [/package.json](package.json) for the build scripts. 

If, for some reason, you get errors about `d3/build/d3.js` missing, try running `npm run clean` and `npm install`.

## Third-party vendor licenses

A full list of third-party npm packages and their licenses is maintained in [`third_party_licenses/THIRD_PARTY_LICENSES.md`](third_party_licenses/THIRD_PARTY_LICENSES.md). To regenerate it after dependency changes, run:

```sh
npx github:heavyai/js-license-list
```

This requires `node_modules` to be installed (`npm install`). The script is maintained in the [heavyai/js-license-list](https://github.com/heavyai/js-license-list) repo.

Every third-party module from npm that gets includes in the final, distributed bundle has its license verified and license text (if provided) or license type shipped in licenses.txt with the bundle. Licenses must be in the pre-approved list of permissive open-source licenses. If it's necessary to override a license for a module because it's missing or improperly tagged in its package.json, add an entry in license-overrides.json.

License descriptions and public license URLs are maintained in licenses.json as well, but they are not verified and might not be up to date.

## Security
> [!WARNING]
> **Do not report security vulnerabilities through public GitHub issues!**

NVIDIA takes security seriously. If you discover a vulnerability in D3 Combo Chart, **DO NOT open a public issue**. Use one of the private reporting channels described in [SECURITY.md](https://github.com/heavyai/heavyai-d3/blob/master/SECURITY.md).

## Support
Join the [HeavyAI GitHub Discussions](https://github.com/orgs/heavyai/discussions) to ask questions, share feedback, and report issues. HeavyAI maintainers review issues, discussions, and pull requests on a best effort basis without guaranteed response timelines.
  
## License
Apache 2.0. See [LICENSE](https://github.com/heavyai/heavyai-d3/blob/master/LICENSE).

