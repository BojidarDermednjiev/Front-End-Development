function solve(inputLineFromConsole) {
  const palindromeFunc = function (number) {
    for (
      let currentDigit = 0;
      currentDigit < number.length / 2;
      currentDigit++
    ) {
      if (number[currentDigit] !== number[number.length - 1 - currentDigit]) {
        return console.log(false);
      }
    }
    console.log(true);
  };
  for (let number of inputLineFromConsole) {
    palindromeFunc(number.toString());
  }
  // another approach:
  // for (const number of inputLineFromConsole) {
  //   const reverseNumber = Number(
  //       number.toString().split("").reverse().join("")
  //   );
  //    console.log(number === reverseNumber);
  // }
}
