var assert = require('assert');
var paper_rock = require('../paper_rock');

describe('paper_rock()', function() {

    it('should check the type of outcome that the function returns', function() {
      var game = new paper_rock();
      var result = typeof game.play();
      assert.equal(result, 'object');
    });

});
