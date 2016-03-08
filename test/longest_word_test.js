var longest_word = require("../longest_word");
var assert = require("assert");

describe("longest_word", function() {

  it('should return "Coding" when longest_word called with "Coding is very interesting"', function() {

    var longWord = new longest_word('Coding is very interesting');
    var result = longWord.longestWord();
    assert.deepEqual(result, "interesting");
  });

  it('should return 11 when longest_word called with "Coding is very interesting "', function() {

    var wordLength = new longest_word('Coding is very interesting');
    var result = wordLength.longWordLength();
    assert.equal (result, 11);
  });
});
