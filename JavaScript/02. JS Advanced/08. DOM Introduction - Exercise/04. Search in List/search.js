function search() {
  let list = Array.from(document.querySelectorAll(`ul li`));
  let searchText = document.getElementById(`searchText`).value;
  let counter = 0;
  debugger;
  list.forEach((x) => {
    let town = x.textContent;
    if (town.includes(searchText)) {
      x.style.textDecoration = `underline`;
      x.style.fontWeight = `bold`;
      counter++;
    }
  });
  document.getElementById(`result`).textContent = `${counter} matches found`;
}
