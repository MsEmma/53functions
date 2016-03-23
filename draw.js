module.exports = function(stringList) {

  string = "";

  for (i = 0; i < stringList.length; i++) {
    string += (stringList[i] + "\n");
  }

  return (string);

}
