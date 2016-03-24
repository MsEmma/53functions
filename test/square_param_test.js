var assert = require('assert');
var square_param = require("../square_param");

describe("square_param", function() {
  it("should return a square_param of a certain size from a character parameter", function() {
    var result = square_param("@", 6);
    assert.equal(result, "  @ @ @ @ @ @\n  @ @ @ @ @ @\n  @ @ @ @ @ @\n  @ @ @ @ @ @\n  @ @ @ @ @ @\n  @ @ @ @ @ @\n ");
  })
})
