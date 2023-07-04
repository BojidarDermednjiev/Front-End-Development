function solve(take,inputLineFromConsole){
    inputLineFromConsole.splice(take);
    console.log(inputLineFromConsole.reverse().join(" "));
}