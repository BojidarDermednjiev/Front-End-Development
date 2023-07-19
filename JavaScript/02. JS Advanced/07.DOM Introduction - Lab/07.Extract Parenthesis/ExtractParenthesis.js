function extract(content) {
  var paragraph = document.getElementById(content);
  var text = paragraph.textContent;
  var regex = /\((.*?)\)/g;
  var matches = text.match(regex);
  return matches ? matches.join(", ") : "";
}
