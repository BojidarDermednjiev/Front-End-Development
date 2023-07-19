function editElement(ref, match, replacer) {
  let content = ref.textContent;
  let pattern = new RegExp(match, `g`);
  let edited = content.replace(pattern, replacer);
  ref.textContent = edited;
}
