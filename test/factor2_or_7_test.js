var assert = require('assert');
var factor2_or_7 = require('../factor2_or_7')

describe('factor2_or_7', function() {
  it('should take a number as a parameter, and find all the factors of 2 or 7 that are less than it', function() {
    assert.deepEqual(factor2_or_7(17), [16, 14, 12, 10, 8, 7, 6, 4, 2]);
  });
});
