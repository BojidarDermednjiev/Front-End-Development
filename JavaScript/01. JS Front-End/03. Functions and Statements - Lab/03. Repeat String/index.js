function solve(chars, repeatCount) {
  const outputLine = function (income, countOfRepeates) {
    return income.repeat(countOfRepeates);
  };
  console.log(outputLine(chars, repeatCount));
}
