function creatCat(info) {
  const cats = info.reduce((acc, curr) => {
    const [name, age] = curr.split(" ");
    acc[name] = age;
    return acc;
  }, {});
  Object.entries(cats).forEach(([key, value]) => {
    console.log(`${key}, age ${value} says Meow`);
  });
}
// Another approach
function creatCat(info) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }
  info.forEach((line) => {
    const [name, age] = line.split(" ");
    const cat = new Cat(name, age);
    console.log(cat.meow());
  });
}
