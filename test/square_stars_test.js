var assert = require('assert');
var square_stars = require("../square_stars");

describe("square_stars", function() {
  it("should draw a 4x4 square using the * character", function() {
    var result = square_stars();
    assert.equal(result, "  * * * *\n  * * * *\n  * * * *\n  * * * *\n");
  })
})
