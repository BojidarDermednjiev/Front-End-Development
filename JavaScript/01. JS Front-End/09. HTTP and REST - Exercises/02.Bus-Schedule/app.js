function solve() {
  const API_URL = ` http://localhost:3030/jsonstore/bus/schedule/`;
  const info = {
    departBtn: document.getElementById(`depart`),
    arriveBtn: document.getElementById(`arrive`),
    busInfo: document.querySelector(`.info`),
  };
  let busStopInfo = {
    name: ``,
    next: `depot`,
  };
  function update(departBtn, arriveBtn, textContent) {
    info.departBtn.disabled = departBtn;
    info.arriveBtn.disabled = arriveBtn;
    info.busInfo.textContent = textContent;
  }
  function depart() {
    fetch(`${API_URL}${busStopInfo.next}`)
      .then((res) => res.json())
      .then((busStop) => {
        busStopInfo = busStop;
        update(true, false, `Next stop ${busStopInfo.name}`);
      })
      .catch(() => {
        update(true, true, `Error`);
      });
  }
  async function arrive() {
    update(false, true, `Arriving at ${busStopInfo.name}`);
  }
  return {
    depart,
    arrive,
  };
}

let result = solve();
