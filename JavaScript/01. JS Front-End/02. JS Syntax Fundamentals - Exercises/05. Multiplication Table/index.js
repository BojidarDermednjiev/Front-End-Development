function solve(readNumberFromConsole) {
  for (let currentNumber = 1; currentNumber <= 10; currentNumber++) {
    console.log(
      `${readNumberFromConsole} X ${currentNumber} = ${
        readNumberFromConsole * currentNumber
      }`
    );
  }
}
