// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Close the menu after tapping a link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Fall back to a neutral background if an image file is missing
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => (img.style.visibility = "hidden"));
});

// Add a shadow to the navbar once the page is scrolled
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 10 ? "0 2px 12px rgba(0,0,0,.08)" : "none";
});
