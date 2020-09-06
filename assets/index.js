const video = document.querySelector("video");
const button = document.querySelector("button")

button.onclick = () => video.play();

function Mediaplayer(config) {
    this.media = config.el
}
Mediaplayer.prototype.play = function () {
    this.media.play();
}
const player = new MediaPlayer({ el: video });
button.onclick = () => player.play();