function solve(words, text) {
  let foundingWords = words.split(", ");
  for (let currWord of foundingWords) {
    text = text.replace("*".repeat(currWord.length), currWord);
  }
  return console.log(text);
}
