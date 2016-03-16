var assert = require("assert");
var occurs_most = require("../occurs_most")

describe("occurs_most", function() {

  it("should return the letter that occurs the most within a sentence", function() {
    var result = occurs_most("Can you calculate and add and subtract the product of the sum");
    assert.deepEqual(result, ["a"]);
  })
})
