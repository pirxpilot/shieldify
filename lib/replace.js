module.exports = replace;

var replacements = [
  {
    from: /https:\/\/secure.travis-ci.org\/(\S+\/\S+)\.png/,
    to: 'https://img.shields.io/travis/$1.svg'
  },
  {
    from: /https:\/\/gemnasium.com\/(\S+\/\S+)\.png/,
    to: 'https://img.shields.io/gemnasium/$1.svg'
  },
  {
    from: /https:\/\/badge.fury.io\/js\/(\S+)\.png/,
    to: 'https://img.shields.io/npm/v/$1.svg'
  }
];


function replace(line) {
  return replacements.reduce(function(line, item) {
    return line.replace(item.from, item.to);
  }, line);
}