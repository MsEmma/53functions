module.exports = function() {

  var sentence = "How come you are learning so many things";
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
