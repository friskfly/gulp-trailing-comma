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
