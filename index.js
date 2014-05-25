var fs = require('fs');
var line = require('./lib/line');
var map = require('./lib/map');
var replace = require('./lib/replace');

module.exports = shieldify;

function improve(from, to) {
  from = fs.createReadStream(from);
  to = fs.createWriteStream(to);
  from
    .pipe(line())
    .pipe(map(replace))
    .pipe(to);
}

function shieldify(filename) {
  var backup = filename + '~';
  fs.rename(filename, backup, function() {
    improve(backup, filename);
  });
}