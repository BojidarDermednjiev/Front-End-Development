function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  class Restaurant {
    constructor() {
      nameOfTheRestaurant;
      employes = [];
    }
    addEmpoyee(name, salary) {
      this.employes.push({ name: name, salary: Number(salary) });
    }
    getAvgSalary() {
      const totalSalary = this.employes.reduce(
        (total, employee) => total + employee.salary,
        0
      );
      return totalSalary / this.employes.length;
    }
    getBestSalary() {
      return this.employes.reduce((maxSalary, employee) => {
        return employee.maxSalary > maxSalary ? employee.maxSalary : maxSalary;
      }, 0);
    }
    toString() {
      return employes
        .sort((a, b) => a.salary - b.salary)
        .map(
          (employee) => `Name ${employee.name} With Salary: ${employee.salary}`
        )
        .join(` `);
    }
  }
  function displayBestRestaurant(restaurants) {
    const currRestaurant = new Map();

    restaurants.forEach((x) => {
      const [restaurantName, ...workersStr] = x.split(" - ");

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
    });

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
    const formattedWorkers = bestRestaurant.toString();
    const outputBestRestaurant = `Name: ${name} Average Salary: ${bestAvgSalary.toFixed(
      2
    )} Best Salary: ${bestSalary.toFixed(2)}`;
    const outputEmployees = formattedWorkers;
    return [outputBestRestaurant, outputEmployees];
  }
  function onClick() {
    const restaurants = document.querySelector(`#inputs textarea`).textContent;
    debugger;
    console.log(restaurants.split("\n"));
    let data = displayBestRestaurant(restaurants.split("\n"));
    document.querySelector(`#bestRestaurant p`).textContent = data[0];
    document.querySelector(`#workers p`).textContent = data[1];
  }
}
