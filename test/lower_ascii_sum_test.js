var assert = require('assert');
var lower_ascii_sum = require('../lower_ascii_sum');

describe('lower_ascii_sum', function() {

    it('should takes a number as a parameter and return the length of the result of the dice rolls.', function() {
      var result = lower_ascii_sum("I am EnjoYing WhaT I am Learning These days");
      assert.equal(result, 2852);
    });
});
