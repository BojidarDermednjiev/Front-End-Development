function createDictionary(input) {
  const dictionary = input
    .map((str) => JSON.parse(str))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
  const sortedDictionary = Object.entries(dictionary).sort(); //([a], [b]) => a.localeCompare(b)
  sortedDictionary.forEach(([key, value]) => {
    console.log(`Term: ${key} => Definition: ${value}`);
  });
}
