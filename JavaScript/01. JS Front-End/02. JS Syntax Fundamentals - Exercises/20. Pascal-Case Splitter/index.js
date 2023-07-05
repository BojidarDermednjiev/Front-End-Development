function solve(inputLineFromConsole) {
  return console.log(inputLineFromConsole.split(/(?=[A-Z])/).join(", "));
}
