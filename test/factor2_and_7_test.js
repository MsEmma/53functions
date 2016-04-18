var assert = require('assert');
var factor2_and_7 = require('../factor2_and_7')

describe('factor2_and_7', function() {
  it('should take a number as a parameter, and find all the factors of  both 2 and 7 that are less than it', function() {
    assert.deepEqual(factor2_and_7(30), [28, 14]);
  });
});
