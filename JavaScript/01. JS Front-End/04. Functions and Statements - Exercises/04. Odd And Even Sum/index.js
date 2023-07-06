function solve(readNumberFromConsole) {
  const evenOddSums = function (number, even, odd) {
    if (number === 0) {
      return console.log(`Odd sum = ${odd}, Even sum = ${even}`);
    }
    const currentNumber = number % 10;
    return evenOddSums(
      Math.floor(number / 10),
      even + (currentNumber % 2 === 0 ? currentNumber : 0),
      odd + (currentNumber % 2 !== 0 ? currentNumber : 0)
    );
  };
  evenOddSums(readNumberFromConsole, 0, 0);
}
