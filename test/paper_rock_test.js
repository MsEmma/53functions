var assert = require('assert');
var paper_rock = require("../paper_rock");

describe("paper_rock", function() {

  it("should play rock paper scissors", function() {
    var game = new paper_rock();
    var result = game.play();
    assert.equal(result[status], 'busy');
  })

});
