function addItem() {
  const info = {
    addBtn: document.querySelector(`input[type="button"]`),
    newItemText: document.getElementById(`newItemText`),
    newItemValue: document.getElementById(`newItemValue`),
    menu: document.getElementById(`menu`),
  };
  let option = document.createElement(`option`);
  option.innerHTML = info.newItemText.value;
  option.value = info.newItemValue.value;
  menu.appendChild(option);
  newItemText.value = ``;
  newItemValue.value = ``;
}
