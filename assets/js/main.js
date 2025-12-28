document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.style.display =
      details.style.display === "block" ? "none" : "block";
    button.textContent =
      details.style.display === "block" ? "Hide Details" : "View Details";
  });
});

document.querySelectorAll(".card.expandable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });

  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const entry = btn.closest(".timeline-entry");
    entry.classList.toggle("open");
    btn.textContent = entry.classList.contains("open")
      ? "Hide Details"
      : "View Details";
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
