var assert = require("assert");
var occurs_least = require("../occurs_least")

describe("occurs_least", function() {

  it("should return the letters that occur the least within a sentence", function() {
    var result = occurs_least("Can you calculate and add and subtract the product of the sum");
    assert.deepEqual(result, ['C', 'y', 'b', 'p', 'f', 'm']);
  })
})
