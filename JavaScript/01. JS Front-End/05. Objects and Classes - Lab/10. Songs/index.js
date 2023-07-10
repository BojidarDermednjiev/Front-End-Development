function solve(inputFromConsole) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  const typeToDisplay = inputFromConsole.pop();
  const [_, ...songs] = inputFromConsole;
  const output = songs
    .map((song) => {
      const [type, name, time] = song.split("_");
      const currentSong = new Song(type, name, time);
      return currentSong;
    })
    .filter((song) => song.type === typeToDisplay)
    .map((song) => song.name)
    .join("\n");
  console.log(output);
}
solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
