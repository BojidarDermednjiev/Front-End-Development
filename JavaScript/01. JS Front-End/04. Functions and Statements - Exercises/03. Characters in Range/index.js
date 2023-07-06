function solve(start, end) {
  let startIndex = 0;
  let endIndex = 0;
  start.charCodeAt() < end.charCodeAt()
    ? ((startIndex = start.charCodeAt()), (endIndex = end.charCodeAt()))
    : ((startIndex = end.charCodeAt()), (endIndex = start.charCodeAt()));
  let asciiTableGenerate = function (startIndex, endIndex) {
    let elements = [];
    for (
      let currentChar = startIndex + 1;
      currentChar < endIndex;
      currentChar++
    ) {
      elements.push(String.fromCharCode(currentChar));
    }
    return console.log(elements.join(" "));
  };
  asciiTableGenerate(startIndex, endIndex);
}
