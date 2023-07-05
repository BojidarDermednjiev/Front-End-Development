function solve(readNumberFromConsole) {
  return console.log(
    (readNumberFromConsole % 4 === 0 && readNumberFromConsole % 100 !== 0) ||
      readNumberFromConsole % 400 === 0
      ? `yes`
      : `no`
  );
}
