
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







// Words.prototype.randomNumber = function () {
//   var newRandomWord = this.randomWordArray[Math.floor(Math.random()*this.randomWordArray.length)] + 1;
//   return newRandomWord.index;
//
// }










// //interface
// $(document).ready(function() {
// });
