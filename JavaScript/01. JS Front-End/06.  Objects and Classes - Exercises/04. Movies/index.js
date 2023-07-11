function solve(input) {
  class Movie {
    constructor() {
      this.movies = [];
    }
    addMovie(command) {
      const [, name] = command.split("addMovie ");
      this.movies.push({ name });
    }
    addDirector(command) {
      const [name, director] = command.split(" directedBy ");
      const movie = this.movies.find((x) => x.name === name);
      if (movie) {
        movie.director = director;
      }
    }
    addDate(command) {
      const [name, date] = command.split(" onDate ");
      const movie = this.movies.find((x) => x.name === name);
      if (movie) {
        movie.date = date;
      }
    }
    print(movies) {
      return this.movies
        .filter((x) => x.name && x.director && x.date)
        .forEach((x) => console.log(JSON.stringify(x)));
    }
  }
  const movies = new Movie();
  input.forEach((command) => {
    if (command.includes(`addMovie`)) {
      movies.addMovie(command);
    } else if (command.includes(`directedBy`)) {
      movies.addDirector(command);
    } else if (command.includes(`onDate`)) {
      movies.addDate(command);
    }
  });
  movies.print();
}
