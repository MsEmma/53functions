module.exports = function(sentence) {

  var words = sentence.split(' ');
  var lastLetters = {};
  var popularEnd = '';
  count = 0;

  words.forEach(function(word) {
    if (lastLetters[(word[word.length - 1])] === undefined) {
      lastLetters[(word[word.length - 1])] = [word];
    } else {
      lastLetters[(word[word.length - 1])].push(word);
    }
  });

  for (var letter in lastLetters) {
    if (lastLetters[letter].length > count) {
      count = lastLetters[letter].length;
      popularEnd = letter;
    }
  }

  return (popularEnd);

}
