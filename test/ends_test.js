var assert = require("assert");
var ends = require("../ends");

describe("ends", function() {

  it("should return the letter most words ends with in a sentence", function() {
    var result = ends("Can you calculate and add and subtract the product of the sum");
    assert.equal(result, "e");
  })
})
