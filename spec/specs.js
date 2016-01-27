describe('Words', function() {
  it("will generate a word", function() {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.word).to.equal("Ocean");
  });

  it("will add letterArray method to each RandomWord", function () {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.letterArray()).to.eql["O","c","e","a","n"];
  });

  // it("will add letterCount method to each RandomWord", function () {
  //   var testRandomWord = new RandomWord("Ocean");
  //   expect(testRandomWord.letterCount()).to.equal(5);
  // });

  // it("will generate a list of words", function() {
  //   var testWords = new Words(["ocean", "beach", "waves", "palm tree", "coconut", "margarita"]);
  //   expect(testWords.word).to.equal(["ocean", "beach", "waves", "palm tree", "coconut", "margarita"]);
  // });
});
