function encodeAndDecodeMessages() {
  const textareas = document.querySelectorAll(`textarea`);
  const btn = document.querySelectorAll(`button`);
  const map = {
    encode: {
      text: textareas[0],
      btn: btn[0],
      transform: (char) => String.fromCharCode(char.charCodeAt(0) + 1),
    },
    decode: {
      text: textareas[1],
      btn: btn[1],
      transform: (char) => String.fromCharCode(char.charCodeAt(0) - 1),
    },
  };
  document.getElementById(`main`).addEventListener(`click`, (event) => {
    if (event.target.tagName !== `BUTTON`) return;
    const type = event.target.textContent
      .toLowerCase()
      .trim()
      .includes(`encode`)
      ? `encode`
      : `decode`;
    const message = map[type].text.value
      .split(``)
      .map(map[type].transform)
      .join(``);
    map.encode.text.value = ``;
    map.decode.text.value = message;
  });
}
