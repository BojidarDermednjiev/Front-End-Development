function solve() {
  const html = {
    numberField: document.getElementById("input"),
    convertTo: document.getElementById("selectMenuTo"),
    output: document.getElementById("result"),
    button: document.querySelector("#container > button"),
  };
  const makeOptions = (arr) =>
    arr.map((x) => {
      const option = document.createElement("option");
      x = x.toLocaleLowerCase();
      option.value = x;
      option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`;
      return option;
    });
  const print = (x) => (html.output.value = x);
  makeOptions(["binary", "hexadecimal"]).forEach((x) => html.convertTo.add(x));
  function convert(from, to) {
    to = Number(to) || 0;
    const formats = {
      binary: (x) => (x >>> 0).toString(2),
      hexadecimal: (x) => x.toString(16).toLocaleUpperCase(),
    };
    return formats[from](to);
  }
  html.button.addEventListener("click", () =>
    print(convert(html.convertTo.value, html.numberField.value))
  );
}
