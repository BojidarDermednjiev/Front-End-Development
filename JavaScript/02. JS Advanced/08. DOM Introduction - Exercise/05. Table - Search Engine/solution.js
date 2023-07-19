function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchQuery = document.getElementById(`searchField`).value;
    const cells = Array.from(document.querySelectorAll(`tbody td`));
    const activeRows = Array.from(document.querySelectorAll(`tbody tr.select`));
    if (searchQuery.length === 0) {
      activeRows.forEach((x) => x.classList.remove(`select`));
      return;
    }
    activeRows.forEach((x) => x.classList.remove(`select`));
    cells.forEach((cell) => {
      if (cell.textContent.includes(searchQuery)) {
        cell.parentElement.classList.add("select");
      }
    });
  }
}
