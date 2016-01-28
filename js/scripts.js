
//business logic
function RandomWord (word) {
  this.word = word;
}

RandomWord.prototype.letterArray = function () {
  return this.word.split('');

}

RandomWord.prototype.letterCount = function () {
  return this.letterArray().length;
}

function Words (wordArray) {
  this.wordArray = wordArray;
  this.randomWordArray = [];
  for(var i = 0; i < this.wordArray.length; i++){
    var newRandomWord = new RandomWord(wordArray[i]);
    this.randomWordArray.push(newRandomWord);
  };
};

var newRandomWord = function(randomWordArray, index) {
  var newWord = randomWordArray[index];
  return newWord.word;
}

var newRandomWordCount = function (randomWordArray, index) {
  var newWord = randomWordArray[index];
  return newWord.letterCount();
}

var newLetterArray = function (randomWordArray, index) {
  var newWord = randomWordArray[index];
  return newWord.letterArray();
}



// //interface
$(document).ready(function() {

  var newWordArray = ["ocean", "beach", "dolphin", "starfish", "plankton", "waves", "sunshine", "coconut", "margarita"];
  var newWords = new Words(newWordArray);

  var wordIndex = newWordArray.length;

    $("#letsPlay").click(function() {
        $("#underscores").empty();
        wordIndex = wordIndex - 1;
        if(wordIndex > -1){
          var newWord = newRandomWord(newWords.randomWordArray, wordIndex);

          var letterArray = newLetterArray(newWords.randomWordArray, wordIndex);
          var newletterCount = letterArray.length;
          var columnWidth = Math.floor(12 / letterArray.length);

          for (var j = 0; j < newletterCount; j++) {
            // alert(columnWidth);
            $("#underscores").append("<div class='col-md-" + columnWidth + " letterSpaces'></div>");
          };
        } else {
          alert("You've run out of words. Please Refresh the page to play again");
        }


    });


  });
