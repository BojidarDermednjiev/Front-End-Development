function solve(readNumberFromConsole) {
  function recursionSum(readNumberFromConsole) {
    if (readNumberFromConsole < 10) {
      return readNumberFromConsole;
    }
    const lastDigit = readNumberFromConsole % 10;
    const remainingDigits = Math.floor(readNumberFromConsole / 10);
    return lastDigit + recursionSum(remainingDigits);
  }
  return console.log(recursionSum(readNumberFromConsole));
}
