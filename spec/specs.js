describe('Words', function() {
  it("will generate a word", function() {
    var testRandomWord = new RandomWord("Ocean");
    expect(testRandomWord.word).to.equal("Ocean");
  });
  // it("will generate a list of words", function() {
  //   var testWords = new Words([]);
  //   expect(testWords.word).to.equal([]);
  // });
});
