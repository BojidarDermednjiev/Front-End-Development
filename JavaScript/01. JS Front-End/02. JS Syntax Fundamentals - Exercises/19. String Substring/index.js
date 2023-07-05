function solve(word, text) {
  return console.log(
    text.toLowerCase().split(" ").includes(word.toLowerCase())
      ? `${word.toLowerCase()}`
      : `${word.toLowerCase()} not found!`
  );
}
