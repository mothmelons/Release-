
function changeVideo(url) {
  const player = document.getElementById('videoPlayer');
  player.src = url;
  player.load();
  player.play();
}
