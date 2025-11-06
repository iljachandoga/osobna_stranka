function loadText(file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p>⚠️ Text sa nepodarilo načítať.</p>";
    });
}

// Otvorí alebo zatvorí bočný panel
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

// Cal.com modálne okno
function openModal() {
  const modal = document.getElementById("modal");
  const iframe = document.getElementById("calFrame");
  iframe.src = "https://cal.com/tvoj-link"; // ← sem vlož svoj Cal.com odkaz
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const iframe = document.getElementById("calFrame");
  iframe.src = "";
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
