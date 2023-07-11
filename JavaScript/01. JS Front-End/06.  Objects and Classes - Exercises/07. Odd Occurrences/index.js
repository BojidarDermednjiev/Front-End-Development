function extractOddElements(sentence) {
  const words = sentence.split(" ");
  const wordCount = words.reduce((acc, curr) => {
    const lowercaseWord = curr.toLowerCase();
    acc[lowercaseWord] = (acc[lowercaseWord] || 0) + 1;
    return acc;
  }, {});
  const oddElements = [];
  Object.entries(wordCount).forEach(([key, value]) => {
    if (value % 2 !== 0) {
      oddElements.push(key);
    }
  });
  return console.log(oddElements.join(" ").trimEnd());
}
