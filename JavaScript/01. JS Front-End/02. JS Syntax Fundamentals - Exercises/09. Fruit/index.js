function solve(product, grams, pricePerKG) {
  return console.log(
    `I need $${((grams / 1000) * pricePerKG).toFixed(2)} to buy ${(
      grams / 1000
    ).toFixed(2)} kilograms ${product}.`
  );
}
