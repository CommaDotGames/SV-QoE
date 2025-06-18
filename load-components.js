document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-include]').forEach(el => {
    fetch(el.getAttribute('data-include'))
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => {
        el.innerHTML = "<p style='color:red;'>Component failed to load.</p>";
        console.error(err);
      });
  });
});
