var assert = require('assert');
var paper_rock = require('../paper_rock');

describe('paper_rock', function() {

    it('should check the type of outcome that the function returns', function() {
      var game = new paper_rock();
      var result = typeof game.play();
      assert.equal(result, 'object');
    });

    var tests = [
    {args: '* - x', outcome: {result: '* - x', winner: 'Player1', status: 'busy'}},
    {args: '* - #', outcome: {result: '* - #', winner: 'Player2', status: 'busy'}},
    {args: '# - x', outcome: {result: '# - x', winner: 'Player2', status: 'busy'}}];

    tests.forEach(function(test) {
      it('should return the expected outcomes given the random choices generated', function(){
        var game = new paper_rock();
        var res = (game.play(test.args)).outcome;
        assert.deepEqual(res, test.outcome);
      });
    });

    it('should return a status of done whenever the play method is called without parameters', function(){
      var game = new paper_rock(3);
      var round1 = game.play('* - #').score();
      var round2 = game.play('x - *').score();
      var round3 = game.play('x - #').score();
      var res = (game.play().score()).outcome;
      assert.deepEqual(res, { result: 'none', winner: 'none', status: 'done' });
    });

    it('should return the winner property since game status is done', function(){
      var game = new paper_rock(3);
      var round1 = game.play('* - #').score();
      var round2 = game.play('x - *').score();
      var round3 = game.play('x - #').score();
      var res = (game.play().score()).scoreboard;
      assert.deepEqual(res, { Player1: 1, Player2: 2, winner: 'Player2' });
    });

});
