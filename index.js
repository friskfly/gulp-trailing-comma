var esprima = require('esprima');
var fs = require("fs");


var path = "example.js";

var source = fs.readFileSync(path, "utf8")
  // var source = "var a = {a:1,b:2,c:3,}"
var syntax = esprima.parse(source, {
  tokens: true,
  range: true,
  raw: true
})

// console.log(JSON.stringify(syntax,null,"\t"))

var collectedDatas = [];

syntax.tokens.forEach(function(token, index, tokens) {
    if (token.type === "Punctuator" && token.value === "}" && tokens[index - 1].type === "Punctuator" && tokens[index - 1].value === ",") {
      collectedDatas.push({
        range: tokens[index - 1].range,
        replaceString: ""
      })
    }
  })
  // console.log(collectedDatas)
if (collectedDatas.length === 0) return;
for (var i = collectedDatas.length - 1; i >= 0; i--) { // from the backward forward we can ignore the offset problem
  var range = collectedDatas[i].range;
  var replaceString = collectedDatas[i].replaceString;
  source = source.slice(0, range[0]) + replaceString + source.slice(range[1]);
}
// console.log(source)

fs.writeFileSync(path, source, "utf-8"); //write back