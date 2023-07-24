function addItem() {
  const data = document.getElementById(`newItemText`).value;
  const li = document.createElement(`li`);
  li.textContent = data;
  const deleteBtn = document.createElement(`a`);
  deleteBtn.href = `#`;
  deleteBtn.textContent = `[Delete]`;
  deleteBtn.addEventListener(`click`, (event) => {
    event.target.parentElement.remove();
  });
  li.appendChild(deleteBtn);
  document.querySelector(`ul`).appendChild(li);
  document.getElementById(`newItemText`).value = ``;
}
