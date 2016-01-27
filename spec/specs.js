describe('RandomWord', function() {
  it("will generate a word", function() {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.word).to.equal("Ocean");
  });

  it("will add letterArray method to each RandomWord", function () {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.letterArray()).to.eql["O","c","e","a","n"];
  });

  it("will add letterCount method to each RandomWord", function () {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.letterCount()).to.equal(5);
  });
});

describe('Words', function () {
  it("will determine whether or not an array is populated with word objects", function() {
    var testWordArray = ["ocean", "beach", "waves", "sunshine", "coconut", "margarita"];
    var testWords = new Words(testWordArray);
    expect(testWords.randomWordArray.length).to.equal(6);
  });
  it("will return a random number based on length of the word object array", function() {
    var testWordArray = ["ocean", "beach", "waves", "sunshine", "coconut", "margarita"];
    var testWords = new Words(testWordArray);
    expect(testWords.randomNumber()).to.be.a('int');
  });

});
