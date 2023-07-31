const API_URL_RESPONCE_LOCATION = `http://localhost:3030/jsonstore/forecaster/locations`;
const API_URL_CURRENENT_LOCATION = `http://localhost:3030/jsonstore/forecaster/today/`;
const API_URL_OBJECT = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
function attachEvents() {
  document
    .getElementById(`submit`)
    .addEventListener(`click`, getWeatherDataForLocation);
}
const weatherSymbols = {
  Sunny: "☀",
  "Partly sunny": "⛅",
  Overcast: "☁",
  Rain: "☂",
};
async function getWeatherDataForLocation() {
  const locationResponce = document.querySelector(`#location`).value;
  const response = await (await fetch(`${API_URL_RESPONCE_LOCATION}`)).json();
  const location = response.find(
    (x) => x.name.toLowerCase() === locationResponce.toLowerCase()
  );
  const [currentConditions, upcomingWeather] = await Promise.all([
    service.getCurrentConditions(location.code),
    service.getUpcomingWeather(location.code),
  ]);
  document.querySelector(`#forecast`).style.display = `block`;
  const curr = document.getElementById(`current`);
  document
    .querySelector("#current")
    .appendChild(createCurrentWeatherContainer(currentConditions));
  document
    .querySelector("#upcoming")
    .appendChild(createUpcomingWeatherContainer(upcomingWeather));
}
function creatеElement(type, content, classes, id, parent, symbol) {
  const element = document.createElement(type);
  if (content) {
    element.textContent = content;
  }
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute(`id`, id);
  }
  if (parent) {
    parent.appendChild(element);
  }
  if (symbol) {
  }

  return element;
}
attachEvents();
