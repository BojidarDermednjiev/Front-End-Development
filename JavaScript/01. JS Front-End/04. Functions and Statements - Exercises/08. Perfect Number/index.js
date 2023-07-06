function solve(readNumberFromConsole) {
  const findPerfectNumber = function (number) {
    let temp = 0;
    for (let currentNumber = 1; currentNumber <= number / 2; currentNumber++) {
      if (number % currentNumber === 0) {
        temp += currentNumber;
      }
    }
    console.log(
      temp === number && temp != 0
        ? `We have a perfect number!`
        : `It's not so perfect.`
    );
  };
  findPerfectNumber(readNumberFromConsole);
}
