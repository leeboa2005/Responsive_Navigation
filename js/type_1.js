const navToggleBtn = document.querySelector(".nav_togleBtn");
const nav = document.querySelector(".nav_list");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
});
