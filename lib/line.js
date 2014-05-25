var Transform = require('stream').Transform;
var util = require('util');

module.exports = LineStream;

function LineStream(options) {
  if (!(this instanceof LineStream)) {
    return new LineStream(options);
  }

  Transform.call(this, options);
  this.current = '';
}

util.inherits(LineStream, Transform);

LineStream.prototype._transform = function (chunk, encoding, callback) {
  chunk = this.current + chunk.toString();
  var split = chunk.split('\n');
  this.current = split.pop();

  var self = this;
  split.forEach(function(line) { self.push(line + '\n'); });
  callback();
};

LineStream.prototype._flush = function (callback) {
  this.push(this.current);
  callback();
};
