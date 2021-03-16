import Modal from "./Modal";

// Portfolio Site
var projectClicked = false;

let portSiteDemoBtn = document.querySelector("#Portfolio-SiteDemo");
portSiteDemoBtn.disabled = true;

function openDemo(projectUrl) {
  if (projectClicked) {
    window.open(projectUrl, "_blank");
  } else {
    let modal = new Modal(
      "Demo Notice",
      `Before heading over to ${projectUrl}, I just wanted to warn you that all of these demos are running on Heroku's free-tier dynos. This means that up to a 15 second load time is totally normal if the site has not been visited in a while!`,
      "Continue"
    );
    modal.render(projectUrl);
    projectClicked = true;
  }
}

document.querySelector("#Portfolio-SiteRepo").onclick = () => {
  window.open("https://github.com/ATummillo/portfolio-site", "_blank");
};

// Natours
document.querySelector("#NatoursDemo").onclick = () => {
  openDemo("https://atummillo-natours.herokuapp.com/");
};

document.querySelector("#NatoursRepo").onclick = () => {
  window.open("https://github.com/ATummillo/Natours", "_blank");
};

// Trillo
document.querySelector("#TrilloDemo").onclick = () => {
  openDemo("https://atummillo-trillo.herokuapp.com/");
};

document.querySelector("#TrilloRepo").onclick = () => {
  window.open("https://github.com/ATummillo/Trillo", "_blank");
};

// Nexter
document.querySelector("#NexterDemo").onclick = () => {
  openDemo("https://atummillo-nexter.herokuapp.com/");
};

document.querySelector("#NexterRepo").onclick = () => {
  window.open("https://github.com/ATummillo/Nexter", "_blank");
};

// Star Social
document.querySelector("#Star-SocialDemo").onclick = () => {
  openDemo("https://atummillo-star-social.herokuapp.com/");
};

document.querySelector("#Star-SocialRepo").onclick = () => {
  window.open("https://github.com/ATummillo/star-social", "_blank");
};

// Canvas Image Manipulation
document.querySelector("#CanvasDemo").onclick = () => {
  openDemo("https://canvas-image-manipulation.herokuapp.com/");
};

document.querySelector("#CanvasRepo").onclick = () => {
  window.open(
    "https://github.com/ATummillo/canvas-image-manipulation",
    "_blank"
  );
};

// Recipe API
document.querySelector("#Recipe-APIDemo").onclick = () => {
  openDemo("https://atummillo-recipe-api.herokuapp.com/api/recipe/");
};

document.querySelector("#Recipe-APIRepo").onclick = () => {
  window.open("https://github.com/ATummillo/recipe-app-api", "_blank");
};

// Tech Blog
document.querySelector("#Tech-BlogDemo").onclick = () => {
  openDemo("https://tech-blog-demo.herokuapp.com/");
};

document.querySelector("#Tech-BlogRepo").onclick = () => {
  window.open("https://github.com/ATummillo/tech-blog-demo", "_blank");
};
