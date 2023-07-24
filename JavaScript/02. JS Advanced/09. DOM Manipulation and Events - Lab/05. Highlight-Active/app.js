function focused() {
  const tables = Array.from(document.querySelectorAll(`input`));
  tables.forEach((x) => {
    x.addEventListener(`focus`, (event) => {
      event.target.parentElement.classList.add(`focused`);
    });
    x.addEventListener(`blur`, (event) => {
      event.target.parentElement.classList.remove(`focused`);
    });
  });
}
