module.exports = function(word) {

  var asciiSum = 0;

  for (var i = 0; i < word.length; i++) {

    asciiSum += word.charCodeAt(i);
  }

  return asciiSum;

}
