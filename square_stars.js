module.exports = function() {

  var string = " ";
  var stringList = ["*", "*", "*", "*"];

  for (j = 0; j < 4; j++) {
    for (i = 0; i < stringList.length; i++) {
      string += (" " + stringList[i]);
    }
    string += "\n ";
  }

  return string;
};
