var esprima = require('esprima')
var through = require('through2')
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


module.exports = function() {
  return through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-trailing-comma', 'Buffers not supported!'))
      return cb()
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(removeTrailingComma(file.contents.toString()))
    }
    this.push(file)
    cb()
  })
}

function removeTrailingComma(source) {
  var syntax = esprima.parse(source, {
    tokens: true,
    range: true,
    raw: true
  })

  var collectedDatas = []

  syntax.tokens.forEach(function(token, index, tokens) {
    if (token.type === "Punctuator" && token.value === "}" && tokens[index - 1].type === "Punctuator" && tokens[index - 1].value === ",") {
      collectedDatas.push({
        range: tokens[index - 1].range,
        replaceString: ""
      })
    }
  })
  if (collectedDatas.length === 0) return source;
  // from the backward forward we can ignore the offset problem
  for (var i = collectedDatas.length - 1; i >= 0; i--) { 
    var range = collectedDatas[i].range
    var replaceString = collectedDatas[i].replaceString
    source = source.slice(0, range[0]) + replaceString + source.slice(range[1])
  }
  return source
}