var assert = require('assert');
var ascii_upper = require('../ascii_upper')

describe('ascii_upper', function() {
  it('should find the sum of all the capital letter ASCII codes', function() {
    assert.deepEqual(ascii_upper(), 2015);
  });
});
