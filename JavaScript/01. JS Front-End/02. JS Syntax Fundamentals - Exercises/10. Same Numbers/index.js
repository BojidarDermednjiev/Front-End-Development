function solve(readNumberFromConsole) {
  const digits = readNumberFromConsole.toString().split("").map(Number);
  const isConsistent = new Set(digits).size === 1;
  console.log(isConsistent);
  console.log(
    digits.reduce(function (a, b) {
      return a + b;
    }, 0)
  );
}
