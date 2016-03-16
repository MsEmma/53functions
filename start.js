module.exports = function(sentence) {

  var words = sentence.split(' ');
  var letterMap = {};
  var count = 0;
  var commonLetter = "";

  words.forEach(function(word) {
    if (letterMap[word[0]] === undefined) {
      letterMap[word[0]] = [word];
    } else {
      letterMap[word[0]].push(word);
    }
  })

  for (var letter in letterMap) {

    if (letterMap[letter].length > count) {
      count = letterMap[letter].length;
      popularStart = letter;
    }
  }

  return (popularStart);
}
