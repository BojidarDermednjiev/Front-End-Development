function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  class Restaurant {
    constructor(nameOfTheRestaurant) {
      this.nameOfTheRestaurant = nameOfTheRestaurant;
      this.employees = [];
    }
    addEmpoyee(name, salary) {
      this.employees.push({ name: name, salary: Number(salary) });
    }
    getAvgSalary() {
      const totalSalary = this.employees.reduce(
        (total, employee) => total + employee.salary,
        0
      );
      return totalSalary / this.employees.length;
    }
    getBestSalary() {
      return this.employees.reduce((maxSalary, employee) => {
        return employee.maxSalary > maxSalary ? employee.maxSalary : maxSalary;
      }, 0);
    }
    toString() {
      return this.employees
        .sort((a, b) => a.salary - b.salary)
        .map(
          (employee) => `Name ${employee.name} With Salary: ${employee.salary}`
        )
        .join(` `);
    }
  }
  function displayBestRestaurant(restaurants) {
    const currRestaurant = new Map();

    for (const item of restaurants) {
      const [restaurantName, ...workersStr] = item.split(" - ");

      if (!currRestaurant.has(restaurantName)) {
        const restaurant = new Restaurant(restaurantName);
        workersStr.forEach((x) => {
          const [name, salary] = x.split(" ");
          restaurant.addEmpoyee(name, salary);
        });
      } else {
        const restaurant = currRestaurant.get(restaurantName);
        workersStr.forEach((workerStr) => {
          const [name, salary] = workerStr.split(" ");
          restaurant.addEmpoyee(name, salary);
        });
        currRestaurant.set(restaurantName, restaurant);
      }
    }

    let bestRestaurant;
    let bestAvgSalary = 0;

    currRestaurant.forEach((restaurant, restaurantName) => {
      const avgSalary = restaurant.getAverageSalary();
      if (avgSalary > bestAvgSalary) {
        bestRestaurant = restaurant;
        bestAvgSalary = avgSalary;
      }
    });
    const { name, employee } = bestRestaurant;
    const bestSalary = bestRestaurant.getBestSalary();
    const outputEmployees = bestRestaurant.toString();
    const outputBestRestaurant = `Name: ${name} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    return [outputBestRestaurant, outputEmployees];
  }
  function onClick() {
    const restaurants = document.querySelector(`#inputs textarea`).value;
    let data = displayBestRestaurant(restaurants.split(`\n`));
    document.querySelector(`#bestRestaurant p`).textContent = data[0];
    document.querySelector(`#workers p`).textContent = data[1];
  }
}
