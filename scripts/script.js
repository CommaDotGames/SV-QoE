function loadComponent(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("background", "components/background.html");
  loadComponent("header", "components/header.html");
  loadComponent("introduction", "components/introduction.html");
  loadComponent("video", "components/video.html");
  loadComponent("image", "components/image.html");
  loadComponent("download", "components/download.html");

  document.addEventListener("contextmenu", e => e.preventDefault());
});
