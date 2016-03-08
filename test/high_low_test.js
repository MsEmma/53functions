var high_low = require("../high_low");
var assert = require("assert");

describe("high_low", function() {

  it('should return 25 when high_low called with [15, 10, 20, 25]', function() {

    var maxNumber = new high_low([15, 10, 20, 25]);
    var result = maxNumber.highest();
    assert.equal(result, 25);
   });

  it('should return 10 when high_low called with [15, 10, 20, 25]', function() {

    var minNumber = new high_low([15, 10, 20, 25]);
    var result = minNumber.lowest();
    assert.deepEqual(result, 10);
  });
});
