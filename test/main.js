var assert = require('assert');
var fs = require('fs');
var File = require('vinyl');
var trailingComma = require('../');
var es = require('event-stream');

describe('gulp-trailing-comma', function() {
  describe('basic', function() {
    it('should remove the extra comma', function(done) {
      var fakeFile = new File({
        contents: fs.readFileSync('test/example/example.js')
      });
      var stream = trailingComma()
      stream.write(fakeFile);
      stream.once('data', function(file) {
        assert(file.isBuffer());
        assert.equal(file.contents.toString('utf8'), fs.readFileSync('test/example/example.out.js'))
        done();
      });

    });

    it('should do nothing when no extra commas', function(done) {
      var fakeFile = new File({
        contents: fs.readFileSync('test/example/example.out.js')
      });
      var stream = trailingComma()
      stream.write(fakeFile);
      stream.once('data', function(file) {
        assert(file.isBuffer());
        assert.equal(file.contents.toString('utf8'), fs.readFileSync('test/example/example.out.js'))
        done();
      });

    });

    it('should emit a error when dealing with stream mode', function(done) {
      var fakeFile = new File({
        contents: es.readArray(['stream', 'with', 'those', 'contents'])
      });

      var stream = trailingComma()
      stream.once('error', function() {
        done();
      });
      stream.write(fakeFile);
    })

  });
});