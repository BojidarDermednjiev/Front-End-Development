function attachEventsListeners() {
  const inputs = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };
  let rations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  let btn = Array.from(document.querySelectorAll('input[type="button"]'));
  btn.forEach((x) => {
    x.addEventListener("click", onConvert);
  });
  function onConvert(event) {
    let input = event.target.parentElement.querySelector('input[type="text"]');
    let time = convert(Number(input.value), input.id);
    inputs.days.value = time.days;
    inputs.hours.value = time.hours;
    inputs.minutes.value = time.minutes;
    inputs.seconds.value = time.seconds;
  }

  function convert(value, unit) {
    let days = value / rations[unit];
    return {
      days: days,
      hours: days * rations.hours,
      minutes: days * rations.minutes,
      seconds: days * rations.seconds,
    };
  }
}
