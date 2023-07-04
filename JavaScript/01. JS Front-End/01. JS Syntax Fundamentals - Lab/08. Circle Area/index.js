function solve(inputFromConsole){
    return console.log(typeof(inputFromConsole) === 'number' ? (Math.pow(inputFromConsole, 2) * Math.PI).toFixed(2)
    : `We can not calculate the circle area, because we receive a ${typeof(inputFromConsole)}.`);
}