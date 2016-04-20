var assert = require('assert');
var factorial = require('../factorial');

describe('factorial', function() {
  it('should take a number as a parameter, and can calculate the factorial of it', function() {
    assert.equal(factorial(5), 120);
  });
});
