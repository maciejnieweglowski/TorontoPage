var video = document.getElementById("videoOne");

var btn = document.getElementById("stopBtn");

function pauseBtn() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}