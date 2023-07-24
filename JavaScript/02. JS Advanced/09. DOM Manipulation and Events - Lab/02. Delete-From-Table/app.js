function deleteByEmail() {
  const email = document.querySelector(`input[name="email"]`).value;
  const emails = Array.from(document.querySelectorAll(`td:nth-child(even)`));
  const stats = document.querySelector(`#result`);
  const userEmail = emails.find((x) => x.textContent === email);
  userEmail ? foundEmail(stats) : notFountEmail(stats);
  function foundEmail(stats) {
    userEmail.parentElement.remove();
    stats.textContent = `Deleted.`;
    document.querySelector(`input[name="email"]`).value = ``;
  }
  function notFountEmail(stats) {
    stats.textContent = `Not found.`;
  }
}
