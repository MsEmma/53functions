var assert = require('assert');
var square = require("../square");

describe("square", function() {
  it("should return a 4x4 square from a character parameter", function() {
    var result = square("@");
    assert.equal(result, " @ @ @ @\n @ @ @ @\n @ @ @ @\n @ @ @ @\n\n");
  })
})
