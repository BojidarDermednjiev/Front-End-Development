function generateReport() {
  debugger;
  let headers = Array.from(
    document.getElementsByTagName(`thead`)[0].children[0].children
  );
  let selected = [];
  let rows = Array.from(document.getElementsByTagName(`tbody`)[0].children);
  headers.forEach((header, index) => {
    if (header.children[0].checked) {
      selected.push(index);
    }
  });
  let output = [];
  for (let row = 0; row < rows.length; row++) {
    let employee = {};
    for (const index of selected) {
      let value = rows[row].children[index].textContent;
      employee[headers[index].children[0].getAttribute(`name`)] = value;
    }
    output.push(employee);
  }
  document.getElementById(`output`).value = JSON.stringify(
    output,
    undefined,
    4
  );
  for (const item of headers) {
    item.children[0].checked = false;
  }
}
