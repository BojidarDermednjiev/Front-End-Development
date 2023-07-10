function printCityFromConsole(city) {
  Object.entries(city).forEach(function ([key, value]) {
    console.log(`${key} -> ${value}`);
  });
}
