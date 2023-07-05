function solve(names) {
  names = names.sort((a, b) => a.localeCompare(b));
  for (let index = 0; index < names.length; index++) {
    console.log(`${index + 1}.${names[index]}`);
  }
}
