module.exports = function(n) {
  // rock = "*", paper = "#", scissors = "x"

  var turn = function generateTurn(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  var result = "";
  var choices = {1: '*',2: '#',3: 'x'};
  var Player1 = turn(1, 3);
  var Player2 = turn(1, 3);

  result = choices[Player1] + " - " + choices[Player2];
  var outcome = {result: "",winner: '',status: ''}
  var scoreboard = {Player1: 0,Player2: 0,winner: ''};

  var play = function() {

    if (result === '* - *' || result === '# - #' || result === 'x - x') {
      outcome = {result: result,winner: 'none',status: 'busy'};
      return outcome;
    } else if (result === '* - x') {
      outcome = {result: result,winner: 'Player1',status: 'busy'};
      return outcome;
    } else if (result === '* - #') {
      outcome = {result: result,winner: 'Player2',status: 'busy'};
      return outcome;
    } else if (result === 'x - *') {
      outcome = {result: result,winner: 'Player2',status: 'busy'};
      return outcome;
    } else if (result === 'x - #') {
      outcome = {result: result,winner: 'Player1',status: 'busy'};
      return outcome;
    } else if (result === '# - x') {
      outcome = { result: result,winner: 'Player2',status: 'busy'};
      return outcome;
    } else if (result === '# - *') {
      outcome = {result: result, winner: 'Player1',status: 'busy'};
      return outcome;
    }
  }

  var done = function(){
    outcome.status = "done";
    return outcome;
  }

  var score = function() {

    if (outcome.winner === 'Player1') {
      scoreboard.Player1 += 1;
      return scoreboard;
    } else if (outcome.winner === 'Player2') {
      scoreboard.Player2 += 1;
      return scoreboard;
    } else {
      return scoreboard;
    }
  }

  var scoreUpdate = function() {
    if (scoreboard.Player1 > scoreboard.Player2) {
      scoreboard.winner = "Player1";
      return scoreboard
    } else if(scoreboard.Player1 < scoreboard.Player2) {
      scoreboard.winner = "Player2";
      return scoreboard
    } else {
      return scoreboard
    }
  }

  this.play = function() {
    play();
    console.log(outcome);
    return this;
  }

  this.done = function(){
    done();
    console.log(outcome);
    return this
  }

  this.score = function() {
    score();
    console.log(scoreboard);
    return this;
  }

  this.scoreUpdate = function() {
    scoreUpdate();
    console.log(scoreboard);
    return this
  }
}
