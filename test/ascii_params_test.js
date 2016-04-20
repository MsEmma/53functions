var assert = require('assert');
var ascii_params = require('../ascii_params');

describe('ascii_params', function() {
  it('should take a word as a parameter, and return the sum of all the ASCII codes for it', function() {
    assert.deepEqual(ascii_params("Escalator"), 926);
  });
});
