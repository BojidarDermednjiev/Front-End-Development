function addItem() {
  let dataInfo = document.getElementById(`newItemText`).value;
  let li = document.createElement(`li`);
  li.textContent = dataInfo;
  document.getElementById(`items`).appendChild(li);
  document.getElementById(`newItemText`).value = ``;
}
