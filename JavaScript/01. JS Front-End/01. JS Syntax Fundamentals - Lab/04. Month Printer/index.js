function solve(input){
    let month = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    let output = ``;
    input--;
    for(index = 0; index < month.length; index++){
        if(index === input){
            output = `${month[index]}`;
        }
    }
    console.log(output.length > 0 ? output : `Error!`);
}