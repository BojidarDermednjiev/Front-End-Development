function lockedProfile() {
  const btn = Array.from(document.querySelectorAll(`button`));
  btn.forEach((x) => {
    x.addEventListener(`click`, click);
  });
  function click(event) {
    const lockedRadioBtn =
      event.currentTarget.parentElement.querySelector(`input[type="radio"]`);
    if (lockedRadioBtn.checked) return;
    const isHidden = event.currentTarget.textContent === `Show more`;
    const hiddenInfo = event.currentTarget.parentElement.querySelector(`div`);
    hiddenInfo.style.display = isHidden ? `block` : `none`;
    event.currentTarget.textContent = isHidden ? `Hide it` : `Show more`;
  }
}
