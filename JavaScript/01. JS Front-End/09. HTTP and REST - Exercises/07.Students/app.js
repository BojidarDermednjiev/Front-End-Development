const API_URL = ` http://localhost:3030/jsonstore/collections/students`;
const submit = document.getElementById(`submit`);
const tbody = document.querySelector(`tbody`);
const selectorsInput = {
  firstName: document.querySelector(`input[name="firstName"]`),
  lastName: document.querySelector(`input[name="lastName"]`),
  facultyNumber: document.querySelector(`input[name="facultyNumber"]`),
  grade: document.querySelector(`input[name="grade"]`),
};
function attachEvents() {
  window.onload = loadStudents;
  submit.addEventListener(`click`, createSubmitStudents);
}
async function loadStudents() {
  try {
    const students = await (await fetch(API_URL)).json();
    tbody.innerHTML = ``;
    Object.values(students).forEach((student) => {
      let rowElemente = createElemente(`tr`, 0, student._id, null, tbody);
      createElemente(`td`, 0, student._id, student.firstName, rowElemente);
      createElemente(`td`, 0, student._id, student.lastName, rowElemente);
      createElemente(`td`, 0, student._id, student.facultyNumber, rowElemente);
      createElemente(`td`, 0, student._id, Number(student.grade), rowElemente);
    });
  } catch (error) {
    console.log(error);
  }
}
async function createSubmitStudents() {
  try {
    let firstName = selectorsInput.firstName.value;
    let lastName = selectorsInput.lastName.value;
    let facultyNumber = selectorsInput.facultyNumber.value;
    let grade = selectorsInput.grade.value;
    await fetch(API_URL, {
      method: `POST`,
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade,
      }),
    });
    selectorsInput.firstName.value = "";
    selectorsInput.lastName.value = "";
    selectorsInput.facultyNumber.value = "";
    selectorsInput.grade.value = "";
    loadStudents();
  } catch (error) {
    console.log(error);
  }
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
