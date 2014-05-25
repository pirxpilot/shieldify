var Transform = require('stream').Transform;
var util = require('util');

module.exports = MapStream;

function MapStream(mapFn) {
  if (!(this instanceof MapStream)) {
    return new MapStream(mapFn);
  }

  Transform.call(this, mapFn);
  this.mapFn = mapFn;
}

util.inherits(MapStream, Transform);

MapStream.prototype._transform = function (chunk, encoding, callback) {
  var line = chunk.toString();
  this.push(this.mapFn(line));
  callback();
};
