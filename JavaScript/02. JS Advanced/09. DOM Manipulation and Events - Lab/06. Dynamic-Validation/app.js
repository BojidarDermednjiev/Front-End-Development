function validate() {
  document.getElementById(`email`).addEventListener(`change`, (event) => {
    let email = event.target.value;
    let regex = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    regex.test(email)
      ? (event.target.className = ``)
      : (event.target.className = `error`);
  });
}
