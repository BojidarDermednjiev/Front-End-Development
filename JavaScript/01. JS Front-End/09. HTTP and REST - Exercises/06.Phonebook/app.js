const API_URL = `http://localhost:3030/jsonstore/phonebook`;
const info = {
  phoneBookContainer: document.getElementById(`phonebook`),
  loadBtn: document.getElementById(`btnLoad`),
  btnCreate: document.getElementById(`btnCreate`),
  person: document.getElementById(`person`),
  phone: document.getElementById(`phone`),
};
function attachEvents() {
  info.loadBtn.addEventListener(`click`, loadPhone);
  info.btnCreate.addEventListener(`click`, create);
}
async function loadPhone() {
  try {
    const phoneBooks = await (await fetch(API_URL)).json();
    info.phoneBookContainer.innerHTML = ``;
    Object.values(phoneBooks).forEach((phoneBook) => {
      const liElement = createElemente(
        `li`,
        0,
        phoneBook._id,
        `${phoneBook.person}: ${phoneBook.phone}`,
        info.phoneBookContainer
      );
      const btnDelete = createElemente(
        `button`,
        0,
        phoneBook._id,
        `Delete`,
        liElement
      );
      btnDelete.addEventListener(`click`, deleteBtn);
    });
  } catch (error) {
    console.log(error);
  }
}
async function create() {
  const person = info.person.value;
  const phone = info.phone.value;
  fetch(API_URL, {
    method: `POST`,
    body: JSON.stringify({ person, phone }),
  })
    .then((res) => res.json())
    .then(() => {
      info.person.value = ``;
      info.phone.value = ``;
      loadPhone();
    })
    .catch((error) => console.log(error));
}
async function deleteBtn() {
  const id = this.id;
  fetch(`${API_URL}/${id}`, {
    method: `DELETE`,
  })
    .then((res) => res.json())
    .then(() => {
      loadPhone();
    })
    .catch((error) => {
      console.log(error);
    });
}
function createElemente(type, classes, id, textContent, parent) {
  let element = document.createElement(type);
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute(`id`, id);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
attachEvents();
