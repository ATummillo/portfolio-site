// Clickable Nav Elements
document.querySelector("#Intro-Button").onclick = () => {
  scrollToSection("#About");
};

document.querySelector("#Home-nl").onclick = () => {
  scrollToSection("#Intro");
};

document.querySelector("#About-nl").onclick = () => {
  scrollToSection("#About");
};

document.querySelector("#Skills-nl").onclick = () => {
  scrollToSection("#Skills");
};

document.querySelector("#Portfolio-nl").onclick = () => {
  scrollToSection("#Portfolio");
};

document.querySelector("#Contact-nl").onclick = () => {
  scrollToSection("#Contact");
};

document.querySelector("#Resume").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1mfoNuT3CZuotS0W1IBltE3L9bv5xdDUT/view?usp=sharing",
    "_blank"
  );
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

// Functions
function scrollToSection(elId) {
  let navHeight = parseInt(
    window
      .getComputedStyle(document.querySelector("#Nav"), null)
      .getPropertyValue("height"),
    10
  );
  let elPosition =
    document.querySelector(elId).getBoundingClientRect().top + window.scrollY;

  if (elId == "#Skills") {
    elPosition += navHeight;
  }

  let offsetPosition = elPosition - navHeight;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}
