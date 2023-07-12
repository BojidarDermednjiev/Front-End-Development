function focused() {
  const inputs = Array.from(document.querySelectorAll(`input`));
  inputs.forEach((input) => {
    input.addEventListener(`focus`, (event) => {
      //event.target.parentElement.className = `focused`;
      event.target.parentElement.classList.add(`focused`);
    });
    input.addEventListener(`blur`, (event) => {
      //event.target.parentElement.className = ``;
      event.target.parentElement.classList.remove(`focused`);
    });
  });
}
