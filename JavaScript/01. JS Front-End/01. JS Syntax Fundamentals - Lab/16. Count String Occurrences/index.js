function solve(text, word){
     return console.log(text.split(" ").filter(function (element){
        return element == word;
    }).length);
}