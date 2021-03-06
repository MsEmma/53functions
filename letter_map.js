module.exports = function(sentence) {

  var words = sentence.split(' ');
  var letterMap = {};

  words.forEach(function(word) {
    if (letterMap[word[0]] === undefined) {
      letterMap[word[0]] = [word];
    } else {
      letterMap[word[0]].push(word);
    }
  })

  return (letterMap);
}
