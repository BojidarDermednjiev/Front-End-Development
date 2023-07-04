function solveMathProblem(firstNumber, secondNumber, operator){
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
      };
      const result = operations[operator](firstNumber, secondNumber);
      console.log(result);
}