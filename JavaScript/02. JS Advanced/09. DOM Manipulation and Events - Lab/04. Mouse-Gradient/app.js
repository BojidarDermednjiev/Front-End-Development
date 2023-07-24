function attachGradientEvents() {
  let gradient = document.getElementById(`gradient`);
  let div = document.getElementById(`result`);
  gradient.addEventListener(`mousemove`, (event) => {
    div.textContent =
      Math.floor((event.offsetX / gradient.clientWidth) * 100) + "%";
  });
}
