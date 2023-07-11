function piccolo(parkingLot) {
  class Parking {
    constructor() {
      this.cars = new Set();
    }
    enter(carNumber) {
      this.cars.add(carNumber);
    }
    exit(carNumber) {
      this.cars.delete(carNumber);
    }
    printCars() {
      this.cars.size === 0
        ? console.log("Parking Lot is Empty")
        : Array.from(this.cars)
            .sort()
            .forEach((carNumber) => {
              console.log(carNumber);
            });
    }
  }
  const parking = new Parking();

  parkingLot.forEach((entry) => {
    const [direction, carNumber] = entry.split(", ");
    direction === "IN" ? parking.enter(carNumber) : parking.exit(carNumber);
  });

  parking.printCars();
}
