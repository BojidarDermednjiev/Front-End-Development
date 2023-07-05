function solve(age){
    if(age < 0){
        return console.log(`out of bounds`);
    }else{
        const info = {
            ageRange: [
                {minAge: 0, maxAge: 2, opinion: `baby`},
                {minAge: 3, maxAge: 13, opinion: `child`},
                {minAge: 14, maxAge: 19, opinion: `teenager`},
                {minAge: 20, maxAge: 65, opinion: `adult`},
                {minAge: 66, maxAge: 105, opinion: `elder`},
            ]
        };
        let type = ``;
        for(const range of info.ageRange){
            if(age>= range.minAge && age <= range.maxAge){
                type = range;
            }
        }
        console.log(type.opinion);
    }
}