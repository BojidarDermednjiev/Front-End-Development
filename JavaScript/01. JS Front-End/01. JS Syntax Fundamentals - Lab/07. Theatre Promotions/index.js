function solve(day, age){
    const errorMessage = `Error!`;
    if(age < 0 || age > 122){
        return console.log(errorMessage);
    }
    const costInfo = {
        ageRanges: [
          { minAge: 0, maxAge: 18, weekday: 12, weekend: 15, holiday: 5 },
          { minAge: 18, maxAge: 64, weekday: 18, weekend: 20, holiday: 12 },
          { minAge: 64, maxAge: 122, weekday: 12, weekend: 15, holiday: 10 },
        ],
      };
    let cost;
    for (const range of costInfo.ageRanges) {
        if(age >= range.minAge && age <= range.maxAge){
            cost = range;
        }
    }
    switch(day){
        case `Weekday`: console.log(`${cost.weekday}$`); break;
        case `Weekend`: console.log(`${cost.weekend}$`); break;
        case `Holiday`: console.log(`${cost.holiday}$`); break;
        default: console.log(errorMessage);
    }
}