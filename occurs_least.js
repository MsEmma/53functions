module.exports = function(sentence) {

  var words = sentence.split(' ');
  var string = '';

  words.forEach(function(word) {
    string += word;
  });

  var letterFreqMap = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (letterFreqMap[letter]) {
      letterFreqMap[letter]++;
    } else {
      letterFreqMap[letter] = 1;
    }
  }

  var freqArray = [];

  for (var char in letterFreqMap) {
    freqArray.push(letterFreqMap[char]);
  }

  var least = Math.min.apply(null, freqArray);
  var leastLetters = [];

  for (var char in letterFreqMap) {
    if (letterFreqMap[char] === least) {
      leastLetters.push(char);
    }
  }

  return (leastLetters);
}
