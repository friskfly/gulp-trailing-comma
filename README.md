[![Build status][travis-img]][travis-url]
[![Coverage Status](https://coveralls.io/repos/friskfly/gulp-trailing-comma/badge.svg)](https://coveralls.io/r/friskfly/gulp-trailing-comma)
[![License][license-img]][license-url]
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

[travis-img]: https://travis-ci.org/friskfly/gulp-trailing-comma.svg
[travis-url]: https://travis-ci.org/friskfly/gulp-trailing-comma
[license-img]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
