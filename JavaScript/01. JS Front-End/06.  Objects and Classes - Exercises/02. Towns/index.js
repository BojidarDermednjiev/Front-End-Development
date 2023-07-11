function solve(info) {
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = Number(latitude).toFixed(2);
      this.longitude = Number(longitude).toFixed(2);
    }
  }
  return info
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      const currTown = new Town(town, latitude, longitude);
      return currTown;
    })
    .forEach((city) =>
      console.log(
        `{ town: '${city.town}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`
      )
    );
}
