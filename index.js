const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");
const header = document.querySelector("header");

// show menu
function showNavbar() {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show_menu");
    });
  }
}
// hide menu

function hideNavBar() {
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show_menu");
    });
  }
}

window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 100);
};
