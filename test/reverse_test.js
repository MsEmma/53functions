var assert = require('assert');
var reverse = require('../reverse.js');

describe("reverse", function() {

  it("should reverse 'ZEBRAS' ", function() {
    result = reverse("ZEBRAS");
    assert.equal(result, "SARBEZ");
  });
});
