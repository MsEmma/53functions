var assert = require('assert');
var draw = require("../draw");

describe("draw", function() {
  it("should print each entry in a string list to the screen", function() {
    var result = draw(["How", "about", "coding", "today"]);
    assert.equal(result, "How\nabout\ncoding\ntoday\n");
  })
})
