function showText() {
  var text = document.getElementById("text");
  var link = document.getElementById(`more`);
  text.style.display === "none"
    ? (text.style.display = "inline") && (link.style.display = `none`)
    : (text.style.display = "none");
  // document.getElementById(`text`).style.display = `block`;
  // document.getElementById(`more`).style.display = `none`;
}
