function solve(inputLineFromConsole){
    let odd = 0;
    let even = 0;
    inputLineFromConsole.forEach(element => {
        element % 2 ? even += element : odd += element;
    });
    console.log(odd - even);
}