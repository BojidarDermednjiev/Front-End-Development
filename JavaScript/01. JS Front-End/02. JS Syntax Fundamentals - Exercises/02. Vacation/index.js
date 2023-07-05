function solve(count, type, day){
    const priceInfo = {
        Students: {
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46
        },
        Business: {
            Friday: 10.90 ,
            Saturday: 15.60,
            Sunday: 16
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50
        }
    };
    let total = 0;
    const cost = priceInfo[type][day];
    if(type === `Business` && count >= 100){
        count -= 10;
    }
    total = cost * count;
    if(type === `Students` && count >= 30){
        total -= total * 0.15;
    }else if(type === `Regular` && count >= 10 && count <= 20){
        total -= total * 0.05;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}