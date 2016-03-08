module.exports = function(sentence) {

  var words = sentence.split(' ');

  var wordMap = words.map(function(w) {
    return {
      word: w,
      length: w.length
    }
  })

  var result = wordMap.reduce(function(a, b) {
    return a.word.length < b.word.length ? a : b;
  });
  return result;

}
