function create(words) {
  const content = document.getElementById(`content`);
  words.forEach(function (text) {
    const div = document.createElement(`div`);
    const p = document.createElement(`p`);
    p.textContent = text;
    p.style.display = `none`;
    div.appendChild(p);
    div.addEventListener(`click`, function () {
      p.style.display = p.style.display === `none` ? `block` : `none`;
    });
    content.appendChild(div);
  });
}
