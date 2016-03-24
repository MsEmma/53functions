module.exports = function(char) {

  var string = " ";

  for (j = 0; j < 4; j++) {
    for (i = 0; i < 4; i++) {
      string += (" " + char);
    }
    string += "\n ";
  }

  return string;
};
