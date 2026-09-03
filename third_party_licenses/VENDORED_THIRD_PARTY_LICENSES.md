# Vendored Third-Party Licenses

This file lists third-party components vendored into this project and their licenses, in fulfillment of the attribution requirements of those licenses.

These files are checked directly into `doc/assets/` as part of the generated API documentation theme (built via the `documentation` npm package) and are not resolvable via a package manifest, so they are documented here rather than in `THIRD_PARTY_LICENSES.md`.

Total components: **6**.

## Summary

| Package | Version | License | URL |
| --- | --- | --- | --- |
| documentation (default theme: site.js) | 4.0.0-rc.1 | ISC | [https://github.com/documentationjs/documentation/blob/v4.0.0-rc.1/LICENSE](https://github.com/documentationjs/documentation/blob/v4.0.0-rc.1/LICENSE) |
| documentation (default theme: style.css) | 4.0.0-rc.1 | ISC | [https://github.com/documentationjs/documentation/blob/v4.0.0-rc.1/LICENSE](https://github.com/documentationjs/documentation/blob/v4.0.0-rc.1/LICENSE) |
| Basscss (bass.css, bass-addons.css), bundled via documentation | 4.0.0-rc.1 snapshot | MIT | [https://github.com/basscss/basscss/blob/master/LICENSE.md](https://github.com/basscss/basscss/blob/master/LICENSE) |
| highlight.js GitHub style (github.css), bundled via documentation | 4.0.0-rc.1 snapshot | BSD-3-Clause | [https://github.com/highlightjs/highlight.js/blob/main/LICENSE](https://github.com/highlightjs/highlight.js/blob/main/LICENSE) |
| AnchorJS (anchor.js), bundled via documentation | 1.2.1 | MIT | [https://github.com/bryanbraun/anchorjs/blob/main/LICENSE](https://github.com/bryanbraun/anchorjs/blob/main/LICENSE) |
| Source Code Pro font files (fonts/), bundled via documentation | Unknown snapshot | OFL-1.1 | [https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md](https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md) |

### Notes

- `bass.css`, `bass-addons.css`, and `github.css` are themselves third-party components that `documentation` bundles unmodified from Basscss and highlight.js respectively; they retain their original upstream licenses rather than `documentation`'s own ISC license.
- `fonts/LICENSE.txt`, checked in alongside the Source Code Pro font files, contains the full SIL Open Font License text and Adobe's reserved-font-name notice.
- AnchorJS's vendored snapshot (tag `1.2.1`) predates the addition of a standalone `LICENSE` file to that repo; at that tag the only license grant is the `Copyright (c) 2015 Bryan Braun; Licensed MIT` notice in `anchor.js`'s own header comment. The `main`-branch `LICENSE` link above is used because no version-pinned license file exists, and the terms have remained MIT throughout.
