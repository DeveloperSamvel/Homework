function Song(name, artist) {
  this.name = name;
  this.artist = artist;
}

function Playlist() {
  this.songs = [];
  this.currentSongIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

Playlist.prototype.play = function (action) {
  if (action === "next") {
    return this.songs[this.currentSongIndex].play("next");
  }

  console.log(this.songs[this.currentSongIndex].play());
};

Playlist.prototype.stop = function (action) {
  if (action === "next") {
    return this.songs[this.currentSongIndex].stop() + ", ";
  }

  console.log(this.songs[this.currentSongIndex].stop());
};

Playlist.prototype.next = function () {
  let text = "";
  text += this.stop("next");
  this.currentSongIndex++;
  if (this.currentSongIndex === this.songs.length) {
    this.currentSongIndex = 0;
  }
  text += this.play("next");
  console.log(text);
};

Song.prototype.play = function (action) {
  if (action === "next") {
    return `${this.name} started`;
  }
  return `${this.name} started to play`;
};

Song.prototype.stop = function () {
  return `${this.name} stopped`;
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);

playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
