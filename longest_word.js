module.exports = function(sentence) {
  var longestString = [];
  var words = sentence.split(' ');
  var wordLengths = [];

  words.forEach (function(word){
    wordLengths.push(word.length);
  })
  var longestLength = Math.max.apply(null,wordLengths);
  var pos = wordLengths.indexOf(longestLength);

  this.longestWord = function() {
    return words[pos];
  }

  this.longWordLength = function() {
    return longestLength;
  }

}
