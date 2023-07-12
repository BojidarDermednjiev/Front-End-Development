function deleteByEmail() {
  // let email = document.getElementsByName(`email`)[0].value;
  // let emailCol = document.querySelectorAll(`#customers tr td:nth-child(2)`);
  // for (const td of emailCol) {
  //   if (td.textContent == email) {
  //     let row = td.parentNode;
  //     row.parentNode.removeChild(row);
  //     document.getElementById(`result`).textContent = `Deleted.`;
  //     return;
  //   }
  //   document.getElementById(`result`).textContent = `Not found.`;
  // }
  const email = document.querySelector(`input[name="email"]`).value;
  const emailBoxes = Array.from(
    document.querySelectorAll(`td:nth-child(even)`)
  );
  const stats = document.querySelector(`#result`);
  const userEmail = emailBoxes.find((box) => box.textContent === email);
  if (userEmail) {
    userEmail.parentElement.remove();
    stats.textContent = `Deleted.`;
  } else {
    stats.textContent = `Not found.`;
  }
}
