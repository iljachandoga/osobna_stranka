function loadText(file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p>⚠️ Text sa nepodarilo načítať. Skontroluj názov súboru.</p>";
    });
}
