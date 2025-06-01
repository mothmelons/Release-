
function changeVideo(url) {
  const player = document.getElementById('videoPlayer');
  player.src = url;
  player.load();
  player.play();
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");

  input.addEventListener("input", function () {
      const query = input.value.toLowerCase();
      const items = document.querySelectorAll(".catalog_item");

      items.forEach(item => {
          const text = item.querySelector("p").textContent.toLowerCase();
          item.style.display = text.includes(query) ? "block" : "none";
      });
  });
});
