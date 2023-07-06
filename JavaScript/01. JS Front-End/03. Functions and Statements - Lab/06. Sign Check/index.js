function solve(...inputFromConsole) {
  const cheker = function (elements) {
    const total = elements.reduce((a, b) => a * b, 1);
    return console.log(total < 0 ? `Negative` : `Positive`);
  };
  cheker(inputFromConsole);
}
