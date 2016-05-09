var assert = require('assert'),
    multiples = require('../multiples');

describe('multiples',function(){
  it('should count in multiples',function(){
    var mul = new multiples(7);
    var results = mul.count().count().count().count();
    assert.equal(results.total, 28);
  });
});
