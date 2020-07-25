import Song from "./components/song";
import Movie from "./components/movie";
import PlayList from "./components/playlist";

const list = document.getElementById("list");
const play = document.getElementById("btn-play");
const stop = document.getElementById("btn-stop");
const next = document.getElementById("btn-next");

const media = [
  new Song("Loud(y)", "Lewis Del Mar", "04:09"),
  new Song("Let It Be", "The Beatles", "04:41"),
  new Song("Scars", "Papa Roach", "03:28"),
  new Movie("The Silence of the Lambs", "01:58:00", "1992"),
  new Movie("Hannibal", "02:11:00", "2001"),
];

const playList = new PlayList();

media.forEach((item) => {
  playList.add(item);
});

playList.render(list);

play.onclick = function () {
  playList.play();
  playList.render(list);
};

stop.onclick = function () {
  playList.stop();
  playList.render(list);
};

next.onclick = function () {
  playList.next();
  playList.render(list);
};
