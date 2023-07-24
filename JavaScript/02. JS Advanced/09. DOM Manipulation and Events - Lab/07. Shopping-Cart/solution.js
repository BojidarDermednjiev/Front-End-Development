function solve() {
  let buttons = [
    ...document.querySelectorAll("body > div > div > div.product-add > button"),
  ];

  buttons.forEach((x) => {
    x.addEventListener("click", addToBasket);
  });

  let textarea = document.querySelector("body > div > textarea");

  let producuts = {};

  function addToBasket(event) {
    const name =
      event.target.parentNode.parentNode.children[1].children[0].textContent;
    const price = Number(
      event.target.parentNode.parentNode.children[3].textContent
    );

    producuts[name] ? (producuts[name] += price) : (producuts[name] = price);

    textarea.textContent += `Added ${name} for ${price.toFixed(
      2
    )} to the cart.\n`;
  }

  let check = document.querySelector("body > div > button");

  check.addEventListener("click", checkout);

  function checkout() {
    let purchas = [];
    let totalPrice = 0;

    for (const [key, value] of Object.entries(producuts)) {
      purchas.push(key);
      totalPrice += value;
    }

    textarea.textContent += `You bought ${purchas.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    buttons.forEach((x) => {
      x.removeEventListener("click", addToBasket);
    });

    check.removeEventListener("click", checkout);
  }
}
