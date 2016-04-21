var assert = require('assert');
var dice_rolls = require('../dice_rolls');

describe('dice_rolls', function() {

    it('should takes a number as a parameter and return the length of the result of the dice rolls.', function() {
      var result = dice_rolls(4);
      assert.equal(result.length, 4);
    });
});
