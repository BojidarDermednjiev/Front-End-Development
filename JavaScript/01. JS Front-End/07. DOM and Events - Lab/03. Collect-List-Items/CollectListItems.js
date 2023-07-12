function extractText() {
  //   let nodeItem = document.querySelectorAll(`ul#items li`);
  //   let textArea = document.querySelector(`#result`);
  //   for (let node of nodeItem) {
  //     textArea.value += node.textContent + `\n`;
  //   }
  let nodeItem = Array.from(document.querySelectorAll(`li`));
  let text = nodeItem.map((li) => li.textContent).join(`\n`);
  document.querySelector(`textarea`).value = text;
}
