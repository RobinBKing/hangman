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
  it("will generate an array of words and find the length of the array", function() {
    var testWordArray = ["ocean", "beach", "waves", "sunshine", "coconut", "margarita"];
    var testWords = new Words(testWordArray);
    expect(testWords.randomWordArray.length).to.equal(6);
  });
});

describe('newWordObjects', function () {
  it("will return a randomWord object and the word property from the object", function() {
    var testWordArray = ["ocean", "beach", "waves", "sunshine", "coconut", "margarita"];
    var testWords = new Words(testWordArray);
    expect(newRandomWord(testWords.randomWordArray, 0)).to.equal("ocean");
  });

  it("will return a randomWord object and the word count from the object", function() {
    var testWordArray = ["ocean", "beach", "waves", "sunshine", "coconut", "margarita"];
    var testWords = new Words(testWordArray);
    expect(newRandomWordCount(testWords.randomWordArray, 0)).to.equal(5);
  });

});
