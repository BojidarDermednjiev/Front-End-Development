function extractText() {
  let itemNodes = Array.from(document.getElementsByTagName(`li`));
  let content = itemNodes.map((x) => x.textContent).join(`\n`);
  document.getElementById(`result`).textContent = content;
}
