# gulp-trailing-comma

IE 6 and IE 7 complains about trailing commas by simply refusing to execute code.

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