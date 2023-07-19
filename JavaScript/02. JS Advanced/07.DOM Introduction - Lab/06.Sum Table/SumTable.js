function sumTable() {
  const price = Array.from(
    document.querySelectorAll(`td:nth-child(2):not(#sum)`)
  );
  const total = price.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);

  let v = document.getElementById(`sum`).value;
  document.getElementById(`sum`).textContent = total;
}
