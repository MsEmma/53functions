module.exports = function(char, size) {

  var string = " ";

  for (j = 0; j < size; j++) {
    for (i = 0; i < size; i++) {
      string += (" " + char);
    }
    string += "\n ";
  }

  return string;
};
