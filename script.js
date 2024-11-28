function toggleMenu(params) {
  const navLinks = document.querySelector(".nav-links");
  const burgerLines = document.querySelectorAll(".burger span");

  navLinks.classList.toggle("active");
  burgerLines.forEach((line) => line.classList.toggle("active"));
}
