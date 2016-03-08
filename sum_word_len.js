module.exports = function(sentence) {

  var continuousString = "";
  var words = sentence.split(' ');
  words.forEach(function(word) {
    continuousString += word;
  });
  return (continuousString.length);
}
