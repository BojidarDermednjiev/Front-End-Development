function solve(firstNumber, secondNumber, operator) {
  const mathOperation = function (first, second, operation) {
    second === 0
      ? `You cannot divide by zero!`
      : (() => {
          switch (operation) {
            case "add":
              return console.log(first + second);
              break;
            case "subtract":
              return console.log(first - second);
              break;
            case "divide":
              return console.log(first / second);
              break;
            case "multiply":
              return console.log(first * second);
              break;
            default:
              return `current operation doesn't support!`;
              break;
          }
        })();
  };
  mathOperation(firstNumber, secondNumber, operator);
}
