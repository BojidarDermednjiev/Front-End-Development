function colorize() {
  let tableRows = document.querySelectorAll(`table tr`);
  tableRows.forEach((x) => (x.style.background = `teal`));
  for (let row = 0; row < tableRows.length; row++) {
    if (row % 2 !== 0) {
      tableRows[row].style.backgroundColor = `teal`;
    }
  }
  // another approach
  //   const row = document.querySelectorAll(`tr:nth-child(even)`);
  //   row.forEach((x) => (x.style.background = `teal`));
}
