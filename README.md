[![NPM version][npm-img]][npm-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]
[![Gitter][gitter-img]][gitter-url]
# gulp-trailing-comma

gulp-trailing-comma is a Gulp extension to remove extra trailing comma in js sources.

Since IE 6 and IE 7 complains about trailing commas by simply refusing to execute code.

It uses `esprima` for parsing js source file.

##usage

```js
var removeComma = require('gulp-trailing-comma');

gulp.src('./foo/*.js')
  .pipe(removeComma())
  .pipe(gulp.dest('./dist/'))

```
## before
```js
var object = {
  a : 'a',
  b : 'b',
  c : 'c',
}
```

## after
```js
var object = {
  a : 'a',
  b : 'b',
  c : 'c'
}
```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/gulp-file-include.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-file-include
[travis-img]: https://travis-ci.org/friskfly/gulp-trailing-comma.svg
[travis-url]: https://travis-ci.org/friskfly/gulp-trailing-comma
[coveralls-img]: https://img.shields.io/coveralls/coderhaoxin/gulp-file-include.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/coderhaoxin/gulp-file-include?branch=master
[license-img]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/coderhaoxin/gulp-file-include.svg?style=flat-square
[david-url]: https://david-dm.org/coderhaoxin/gulp-file-include
[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/coderhaoxin/gulp-file-include?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
