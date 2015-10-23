# browser-canonical-url

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Get canonical url for browser.


## Install

```
$ npm install --save browser-canonical-url
```


## Usage

```js
var browserCanonicalUrl = require('browser-canonical-url');
// or
<script src="build/browser-canonical-url.js"></script>

browserCanonicalUrl();
//=> http://example.com/canonical
```



## API

### browserCanonicalUrl() -> ?String

Canonical url or null.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/quietmole/browser-canonical-url
[travis-image]: https://img.shields.io/travis/quietmole/browser-canonical-url/master.svg?style=flat-square&label=build%20%28linux%29
[appveyor-url]: https://ci.appveyor.com/project/sanemat/browser-canonical-url/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/browser-canonical-url/master.svg?style=flat-square&label=build%20%28windows%29
[npm-url]: https://npmjs.org/package/browser-canonical-url
[npm-image]: https://img.shields.io/npm/v/browser-canonical-url.svg?style=flat-square
[daviddm-url]: https://david-dm.org/quietmole/browser-canonical-url
[daviddm-image]: https://img.shields.io/david/quietmole/browser-canonical-url.svg?style=flat-square
