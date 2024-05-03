const navToggleBtn = document.querySelector(".nav_togleBtn");
const nav = document.querySelector(".mb_nav");

navToggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
});
