function solve(elements, rotations) {
  for (let currentIndex = 0; currentIndex < rotations; currentIndex++) {
    const firstElement = elements.shift();
    elements.push(firstElement);
  }
  console.log(elements.join(" "));
}
