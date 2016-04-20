var assert = require("assert");
var start = require("../start");

describe("start", function() {

  it("should return the letter most words starts with in a sentence", function() {
    var result = start("Lets try this today");
    assert.equal(result, "t");
  })
})
