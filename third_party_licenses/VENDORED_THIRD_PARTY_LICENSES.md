# Vendored Third-Party Licenses

This file lists third-party components vendored into this project and their licenses, in fulfillment of the attribution requirements of those licenses.

These components are vendored into `doc/assets/` as part of the generated API documentation theme (built via the `documentation` npm package) rather than installed via a package manifest.

Total components: **7**.

## Summary

| Package | Version | License | URL |
| --- | --- | --- | --- |
| documentation (default theme: site.js) | 4.0.0-rc.1 | ISC | [https://github.com/documentationjs/documentation/blob/master/LICENSE](https://github.com/documentationjs/documentation/blob/master/LICENSE) |
| documentation (default theme: style.css) | 4.0.0-rc.1 | ISC | [https://github.com/documentationjs/documentation/blob/master/LICENSE](https://github.com/documentationjs/documentation/blob/master/LICENSE) |
| documentation (default theme: bass-addons.css) | 4.0.0-rc.1 | ISC | [https://github.com/documentationjs/documentation/blob/master/LICENSE](https://github.com/documentationjs/documentation/blob/master/LICENSE) |
| Basscss (bass.css), bundled via documentation | 4.0.0-rc.1 snapshot | MIT | [https://github.com/basscss/basscss/blob/master/LICENSE.md](https://github.com/basscss/basscss/blob/master/LICENSE.md) |
| highlight.js GitHub style (github.css), bundled via documentation | 4.0.0-rc.1 snapshot | BSD-3-Clause | [https://github.com/highlightjs/highlight.js/blob/main/LICENSE](https://github.com/highlightjs/highlight.js/blob/main/LICENSE) |
| AnchorJS (anchor.js), bundled via documentation | 1.2.1 | MIT | [https://github.com/bryanbraun/anchorjs/blob/main/LICENSE](https://github.com/bryanbraun/anchorjs/blob/main/LICENSE) |
| Source Code Pro font files (fonts/), bundled via documentation | Unknown snapshot | OFL-1.1 | [https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md](https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md) |

### Notes

- `bass.css` and `github.css` are bundled unmodified by `documentation` from Basscss and highlight.js respectively, and retain their original upstream licenses.
- `fonts/LICENSE.txt`, checked in alongside the Source Code Pro font files, contains the full SIL Open Font License text and Adobe's reserved-font-name notice.
- The AnchorJS LICENSE link points to the current default branch; no version-pinned license file is available for the vendored `1.2.1` release.
- The `documentation` LICENSE link points to the current default branch; no version-pinned license file is available for the vendored `4.0.0-rc.1` release.
