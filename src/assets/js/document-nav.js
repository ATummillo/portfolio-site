import { getTopNavHeight } from "./util.js";
import BurgerNav from "./BurgerNav.js";

/*
    Functions
*/
let scrollToSection = (elId) => {
  let navHeight = getTopNavHeight();
  let elPosition =
    document.querySelector(elId).getBoundingClientRect().top + window.scrollY;

  if (elId == "#Skills") {
    elPosition += navHeight;
  }

  let offsetPosition = elPosition - navHeight;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  burgerToggle.checked = false;
};

/*
    Device-independent nav elements
*/
document.querySelector("#Intro-Button").onclick = () => {
  scrollToSection("#About");
};

document.querySelector("#Up-Arrow").onclick = () => {
  scrollToSection("#Intro");
};

document.querySelector("#Github").onclick = () => {
  window.open("https://github.com/ATummillo", "_blank");
};

document.querySelector("#LinkedIn").onclick = () => {
  window.open("https://www.linkedin.com/in/anthonytummillo/", "_blank");
};

document.querySelector("#CodePen").onclick = () => {
  window.open("https://codepen.io/ATummillo/", "_blank");
};

document.querySelector("#dockerhub").onclick = () => {
  window.open("https://registry.hub.docker.com/u/atummillo", "_blank");
};

/*  
    Nav elements visible on laptop 
    and desktop computers
*/
document.querySelector("#HomeNav").onclick = () => {
  scrollToSection("#Intro");
};

document.querySelector("#AboutNav").onclick = () => {
  scrollToSection("#About");
};

document.querySelector("#SkillsNav").onclick = () => {
  scrollToSection("#Skills");
};

document.querySelector("#PortfolioNav").onclick = () => {
  scrollToSection("#Portfolio");
};

document.querySelector("#ContactNav").onclick = () => {
  scrollToSection("#Contact");
};

document.querySelector("#Resume").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1mfoNuT3CZuotS0W1IBltE3L9bv5xdDUT/view?usp=sharing",
    "_blank"
  );
};

/*  
    Nav elements on tablets and mobile devices 
*/
let burgerToggle = document.querySelector("#burger-toggle");
burgerToggle.disabled = true;

let burgerNav = new BurgerNav(scrollToSection);

document.querySelector(".burger__button").onclick = () => {
  if (burgerToggle.checked == true) {
    burgerToggle.checked = false;
    burgerNav.closeBurger();
  } else {
    burgerToggle.checked = true;
    burgerNav.render();
  }
};
