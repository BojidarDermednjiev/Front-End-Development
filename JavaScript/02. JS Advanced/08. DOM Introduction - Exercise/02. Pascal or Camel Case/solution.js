function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let names = text.split(" ");
  let result = "";
  switch (namingConvention) {
    case `Camel Case`:
      names.forEach((x, i) => {
        if (i === 0) {
          return (result += x.toLowerCase());
        }
        return (result += x[0].toUpperCase() + x.substring(1).toLowerCase());
      });
      break;
    case `Pascal Case`:
      names.forEach((x, i) => {
        x = x.toLowerCase();
        result += x[0].toUpperCase() + x.substring(1);
      });
      break;
    default:
      result = `Error!`;
      break;
  }
  document.getElementById(`result`).textContent = result;
}
