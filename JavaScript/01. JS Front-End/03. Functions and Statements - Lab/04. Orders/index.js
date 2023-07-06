function solve(product, count) {
  let calculateTotal = function (product, count) {
    const productPrice = {
      water: 1.0,
      coffee: 1.5,
      coke: 1.4,
      snacks: 2.0,
    };
    let total = 0;
    for (const currProduct in productPrice) {
      if (currProduct == product) {
        total += productPrice[product];
      }
    }
    return `${(total * count).toFixed(2)}`;
  };
  console.log(calculateTotal(product, count));
}
