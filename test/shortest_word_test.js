var shortest_word = require('../shortest_word.js');
var assert = require('assert');

describe("shortest_word", function() {

  it("should return { word: 'so', length: 2 } when shortest_word called with 'How come you are learning so many things' ", function() {
    var result = shortest_word('How come you are learning so many things');
    assert.deepEqual(result, { word: 'so', length: 2 });
  });
});
