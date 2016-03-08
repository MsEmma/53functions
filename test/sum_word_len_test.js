var sum_word_len = require('../sum_word_len');
var assert = require('assert');

describe("sum_word_len", function() {

  it("should return 20 for the string 'I am learning how to code'", function() {
    assert.equal(sum_word_len('I am learning how to code'), 20)
  });
});
