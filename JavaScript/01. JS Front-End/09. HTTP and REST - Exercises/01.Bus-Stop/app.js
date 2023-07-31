function getInfo() {
  const stopIdInput = document.getElementById(`stopId`);
  const stopNameContainer = document.getElementById(`stopName`);
  const busesContainer = document.getElementById(`buses`);
  const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/`;
  const stopId = stopIdInput.value;
  busesContainer.textContent = ``;
  fetch(`${BASE_URL}${stopId}`)
    .then((res) => res.json())
    .then((busInfo) => {
      debugger;
      const { name, buses } = busInfo;
      stopNameContainer.textContent = name;
      Object.entries(buses).forEach(([key, value]) => {
        const li = document.createElement(`li`);
        li.textContent = `Bus ${key} arrives in ${buses[value]} minutes`;
        busesContainer.appendChild(li);
      });
    })
    .catch((err) => {
      stopNameContainer.textContent = `Error`;
    });
}
