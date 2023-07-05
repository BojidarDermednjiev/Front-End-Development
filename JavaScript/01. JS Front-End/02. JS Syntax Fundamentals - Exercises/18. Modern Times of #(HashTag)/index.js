function solve(text) {
  const foundWords = [];
  for (let word of text.split(" ")) {
    let isItLetters = /^[#]+[a-zA-Z]+$/;
    if (word.startsWith("#") && word.match(isItLetters)) {
      foundWords.push(word.substring(1, word.length));
    }
  }
  console.log(foundWords.join("\n"));
}
