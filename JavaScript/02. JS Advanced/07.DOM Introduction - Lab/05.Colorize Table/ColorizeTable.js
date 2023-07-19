function colorize() {
  //   const row = document.querySelectorAll(`tr:nth-child(even)`);
  //   row.forEach((x) => (x.style.background = `teal`));
  let tableRows = document.querySelectorAll(`table tr`);
  for (let row = 0; row < tableRows.length; row++) {
    if (row % 2 !== 0) {
      tableRows[row].style.backgroundColor = `teal`;
    }
  }
}
