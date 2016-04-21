module.exports = function(diceRolls) {

    var result = [];

    var dice = function() {
        return Math.floor(Math.random() * 6) + 1;
    };

    for (var i = 0; i < diceRolls; i++) {
        result.push(dice());
    }

    return result;

}
