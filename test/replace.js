var replace = require('../lib/replace');

/* global describe, it */

describe('replace', function() {
  it('should leave alone line that are not matched', function() {
    replace('Some other line')
      .should
      .eql('Some other line');
  });

  it('should replace travis-ci png', function() {
    replace('[![Build Status](https://secure.travis-ci.org/code42day/mniam.png)](http://travis-ci.org/code42day/mniam)')
      .should
      .eql('[![Build Status](https://img.shields.io/travis/code42day/mniam.svg)](http://travis-ci.org/code42day/mniam)');
  });

  it('should replace gemnasium png', function() {
    replace('[![Dependency Status](https://gemnasium.com/code42day/mniam.png)](https://gemnasium.com/code42day/mniam)')
      .should
      .eql('[![Dependency Status](https://img.shields.io/gemnasium/code42day/mniam.svg)](https://gemnasium.com/code42day/mniam)');
  });

  it('should replace badge fury png', function() {
    replace('[![NPM version](https://badge.fury.io/js/mniam.png)](http://badge.fury.io/js/mniam)')
      .should
      .eql('[![NPM version](https://img.shields.io/npm/v/mniam.svg)](http://badge.fury.io/js/mniam)');
  });
});