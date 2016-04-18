var assert = require('assert');
var fibonacci = require('../fibonacci')

describe('fibonacci', function() {
  it('should take a number as a parameter, and return the fibonacci sequence less than it', function() {
    assert.deepEqual(fibonacci(200), [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]);
  });
});
