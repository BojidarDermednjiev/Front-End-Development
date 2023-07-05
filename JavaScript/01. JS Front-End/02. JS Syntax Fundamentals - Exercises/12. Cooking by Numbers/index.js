function solve(readNumberFromConsole, ...commands) {
  for (let command of commands) {
    switch (command) {
      case `chop`:
        readNumberFromConsole /= 2;
        break;
      case `dice`:
        readNumberFromConsole = Math.sqrt(readNumberFromConsole);
        break;
      case `spice`:
        readNumberFromConsole += 1;
        break;
      case `bake`:
        readNumberFromConsole *= 3;
        break;
      case `fillet`:
        readNumberFromConsole -= readNumberFromConsole * 0.2;
        break;
    }
    console.log(readNumberFromConsole);
  }
}
