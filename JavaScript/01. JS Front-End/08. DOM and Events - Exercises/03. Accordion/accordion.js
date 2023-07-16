function toggle() {
  // var extra = document.getElementById("extra");
  // var button = document.getElementsByClassName("button")[0];

  // if (extra.style.display === "none") {
  //   extra.style.display = "block";
  //   button.innerHTML = "Less";
  // } else {
  //   extra.style.display = "none";
  //   button.innerHTML = "More";
  // }
  const content = document.querySelector(`#extra`);
  const button = document.querySelector(`span.button`);
  content.style.display = content.style.display === "block" ? "none" : "block";
  button.textContent = button.textContent === "More" ? "Less" : "More";
}
