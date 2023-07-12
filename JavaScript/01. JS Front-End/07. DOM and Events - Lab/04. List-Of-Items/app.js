function addItem() {
  //   let text = document.getElementById(`newItemText`).value;
  //   let li = document.createElement(`li`);
  //   li.appendChild(document.createTextNode(text));
  //   document.getElementById(`items`).appendChild(li);
  //   document.getElementById(`newItemText`).value = ``;
  const value = document.querySelector(`#newItemText`).value;
  const item = document.createElement(`li`);
  item.textContent = value;
  document.querySelector(`ul`).appendChild(item);
}
