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











// //interface
// $(document).ready(function() {
// });
