module.exports = function(n) {
  // rock = "*", paper = "#", scissors = "x"

  var outcome = {result: "", winner: '', status: ''}
  var scoreboard = {Player1: 0, Player2: 0, winner: ''};

  var turn = function () {
    return Math.floor(Math.random() * 3) + 1;
  }

  var choices = {1: '*',2: '#',3: 'x'};
  var Player1 = turn(),
      Player2 = turn();

  result = choices[Player1] + " - " + choices[Player2];

  var play = function(result) {

    if (result === '* - *' || result === '# - #' || result === 'x - x') {
      outcome = {result: result, winner: 'none', status: 'busy'};
      return outcome;
    } else if (result === '* - x') {
      outcome = {result: result, winner: 'Player1', status: 'busy'};
      return outcome;
    } else if (result === '* - #') {
      outcome = {result: result, winner: 'Player2', status: 'busy'};
      return outcome;
    } else if (result === 'x - *') {
      outcome = {result: result, winner: 'Player2', status: 'busy'};
      return outcome;
    } else if (result === 'x - #') {
      outcome = {result: result, winner: 'Player1', status: 'busy'};
      return outcome;
    } else if (result === '# - x') {
      outcome = { result: result, winner: 'Player2', status: 'busy'};
      return outcome;
    } else if (result === '# - *') {
      outcome = {result: result, winner: 'Player1', status: 'busy'};
      return outcome;
    } else {
      outcome = {result: 'none', winner: 'none' , status: 'done'};
      return outcome
    }
  };

  var score = function() {
    if(outcome.status === 'busy'){
      if (outcome.winner === 'Player1') {
        scoreboard.Player1 += 1;
        return scoreboard;
      } else if (outcome.winner === 'Player2') {
        scoreboard.Player2 += 1;
        return scoreboard;
      }

    } else if (outcome.status === 'done') {
      if (scoreboard.Player1 > scoreboard.Player2) {
        scoreboard.winner = "Player1";
        return scoreboard;
      } else if(scoreboard.Player1 < scoreboard.Player2) {
        scoreboard.winner = "Player2";
        return scoreboard;
      } else {
        scoreboard.winner = 'tie';
        return scoreboard;
      }
    }
  };

  this.play = function(result) {
    this.outcome = play(result);
    return this;
  }

  this.score = function() {
    this.scoreboard = score();
    return this;
  }

}
