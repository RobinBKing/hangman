
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
  $("#hangmanImg").append("<img src='img/hangman6.jpg'/>");
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var newWordArray = ["ocean", "beach", "dolphin", "starfish", "plankton", "waves", "sunshine", "coconut", "margarita"];
  var newWords = new Words(newWordArray);
  var wordIndex = newWordArray.length;
  $("#letsPlay").click(function() {
    $("#underscores").empty();
      wordIndex = wordIndex - 1;
      if(wordIndex > -1){
        var turnCount = 6;
        $("#hangmanImg").empty().append("<img src='img/hangman" + turnCount + ".jpg'/>");
        var newWord = newRandomWord(newWords.randomWordArray, wordIndex);
        var letterArray = newLetterArray(newWords.randomWordArray, wordIndex);
        var newletterCount = letterArray.length;
        var columnWidth = Math.floor(12 / letterArray.length);

        for (var i = 0; i < newletterCount; i++) {
          $("#underscores").append("<div class='col-md-" + columnWidth + " letterSpaces'><span class='letters' id='letter" + i + "'>" + letterArray[i] + "</span></div>");
        };

        $(".alphabetClick").click(function(){
          var letterchoice = $(this).text();
          var searchCount = 0;
          for (var j = 0; j < newletterCount; j++){
            if (letterchoice.toLowerCase() === letterArray[j].toLowerCase()){
              $("#letter" + j).show();
            }
            else{
              searchCount += 1;
            };
          };
          if(searchCount >= letterArray.length){
            turnCount -= 1;
            $("#hangmanImg").empty().append("<img src='img/hangman" + turnCount + ".jpg'/>");
            if (turnCount === 0){
              alert("You lose!");
            };
          };
        });
      } else {
        alert("You've run out of words. Please Refresh the page to play again");
      };
    });
});
