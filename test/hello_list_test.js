var assert = require('assert');
var hello_list = require('../hello_list.js');

describe("hello_list", function() {

  it("should return ['hello world','hello world','hello world'] when hello_list called with 3", function() {
    result = hello_list(3);
    assert.deepEqual(result, ['hello world', 'hello world', 'hello world']);
  });
  it("should return [] when hello_list called with 0", function() {
    result = hello_list(0);
    assert.deepEqual(result, []);
  });
});
