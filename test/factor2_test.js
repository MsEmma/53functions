var assert = require('assert');
var factor2 = require('../factor2');

describe('factor2', function() {
  it('should take a number as a parameter, and find all the factors of 2 that are less than it', function() {
    assert.deepEqual(factor2(14), [12, 10, 8, 6, 4, 2]);
  });
});
