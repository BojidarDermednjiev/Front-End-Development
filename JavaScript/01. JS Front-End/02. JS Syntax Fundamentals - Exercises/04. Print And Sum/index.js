function solve(start, end) {
  let seriesOfNumbers = [];
  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    seriesOfNumbers.push(currentNumber);
  }
  console.log(seriesOfNumbers.join(" "));
  console.log(`Sum: ${seriesOfNumbers.reduce((a, b) => a + b, 0)}`);
}
