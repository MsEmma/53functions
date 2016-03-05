var assert = require('assert');
//TODO: import the module after you created it.
var upper = require('../upper');

describe("upper", function() {

  it("should uppercase 'ZEBRAS' ", function() {
    //TODO: call your function and use assert to check the result
    result = upper("zebras");
    assert.equal(result, "ZEBRAS");
  });
});
