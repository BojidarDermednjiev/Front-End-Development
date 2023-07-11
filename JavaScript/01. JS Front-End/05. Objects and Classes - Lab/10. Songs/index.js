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
    .filter((song) => {
      if (typeToDisplay === `all`) {
        return song;
      }
      return song.type === typeToDisplay;
    })
    .map((song) => song.name)
    .join("\n");
  console.log(output);
}