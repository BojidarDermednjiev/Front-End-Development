function solve() {
  let text = document.getElementById(`input`).value;
  let sentences = text.split(".").filter((x) => x != 0);
  let output = document.getElementById(`output`);
  while (sentences.length > 0) {
    let sentence = sentences.splice(0, 3).join(".") + ".";
    let p = document.createElement(`p`);
    p.textContent = sentence;
    output.appendChild(p);
  }
}
