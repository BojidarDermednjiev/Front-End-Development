function convertStringToObj(inputLineFromConsole) {
  const person = JSON.parse(inputLineFromConsole);
  Object.entries(person).forEach(([key, value]) =>
    console.log(`${key}: ${value}`)
  );
}
