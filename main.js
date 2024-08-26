import canvasDots from "./heroCanvas.js";
import canvasDotsBg from "./bgCanvas.js";

let title = document.querySelector(".title");
let curs = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 22 + "px";
  curs.style.top = y - 22 + "px";
});

document.addEventListener("mouseleave", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 22 + "px";
  curs.style.top = y - 22 + "px";
});

window.onload = function () {
  canvasDotsBg();
  canvasDots();
};

// loads in about section on scroll
function aboutFadeIn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && document.body.scrollWidth > 1300) {
      document.querySelector(".profile").classList.add("profile__fade-in");

      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      //html
      sleep(1000).then(() => {
        document
          .querySelector(".skills__item--html")
          .classList.add("skills__item-fade-in");
      });

      //js
      sleep(1200).then(() => {
        document
          .querySelector(".skills__item--js")
          .classList.add("skills__item-fade-in");
      });

      //git
      sleep(1300).then(() => {
        document
          .querySelector(".skills__item--git")
          .classList.add("skills__item-fade-in");
      });

      //react
      sleep(1700).then(() => {
        document
          .querySelector(".skills__item--react")
          .classList.add("skills__item-fade-in");
      });
      //node
      sleep(1500).then(() => {
        document
          .querySelector(".skills__item--npm")
          .classList.add("skills__item-fade-in");
      });

      //css
      sleep(1900).then(() => {
        document
          .querySelector(".skills__item--css")
          .classList.add("skills__item-fade-in");
      });
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let options2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(aboutFadeIn, options);

observer.observe(document.querySelector(".about__content"));

// navigation items in nav bar
const navLinks = document.querySelectorAll(".navigation__item");

// change highlighted nav link depending on page position
function navFadeIn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("navigation__item--active");
      });

      document
        .querySelector(`#nav-${entry.target.id}`)
        .classList.add("navigation__item--active");
    }
  });
}

// projects section is a lot longer and needs custom settings
function navFadeInProjects(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("navigation__item--active");
      });

      document
        .querySelector(`#nav-${entry.target.id}`)
        .classList.add("navigation__item--active");
    }
  });
}

let observerNav = new IntersectionObserver(navFadeIn, options);

observerNav.observe(document.querySelector("#hero"));
observerNav.observe(document.querySelector("#about"));
observerNav.observe(document.querySelector("#contact"));

let observerNavProjects = new IntersectionObserver(navFadeInProjects, options2);

observerNavProjects.observe(document.querySelector("#projects"));

// Get the current year
const currentYear = new Date().getFullYear();

// Update the span element with the current year
document.getElementById("current-year").textContent = currentYear;
