function solve(...inputLineFromConsole) {
  const subtract = function (...inputFromConsole) {
    const sum = function (...elements) {
      return elements[0] + elements[1];
    };
    return console.log(sum(...inputFromConsole) - inputFromConsole[2]);
  };
  subtract(...inputLineFromConsole);
}
// function solve(...elements){
//     return console.log((elements[0] + elements[1]) - elements[2]);
// } You can also solve the problem like this :)
