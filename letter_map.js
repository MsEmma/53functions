var sentence = "Lets do this today"

//result, {"L" : ["Let's"], d : ["do"], "t" : ["this", "today"]}

var words = sentence.split(' ');
var letterMap = {};

words.forEach(function(word) {

    if (letterMap[word[0]] in letterMap){
      console.log("repeat")
    }
    else {
      letterMap[word[0]] = [word];
    }
})

console.log(letterMap);
