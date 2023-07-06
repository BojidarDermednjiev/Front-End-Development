function solve(firstNumber, secondNumber) {
  function factorial(number) {
    if (number === 1) {
      return 1;
    }
    return number * factorial(number - 1);
  }
  return console.log(
    (factorial(firstNumber) / factorial(secondNumber)).toFixed(2)
  );
}
