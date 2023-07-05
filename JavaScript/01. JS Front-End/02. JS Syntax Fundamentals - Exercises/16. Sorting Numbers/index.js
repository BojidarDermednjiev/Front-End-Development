function solve(inputLineFromConsole) {
  inputLineFromConsole.sort((a, b) => a - b);
  const output = [];
  const length = inputLineFromConsole.length;
  for (let currentIndex = 0; currentIndex < length; currentIndex++) {
    currentIndex % 2 === 0
      ? output.push(inputLineFromConsole.shift())
      : output.push(inputLineFromConsole.pop());
  }
  return output;
}
