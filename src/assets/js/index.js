import "./intro-animation.js";
import "./page-nav.js";
import "./portfolio-nav.js";
import "../sass/main.scss";

// These grab all pngs in assets/png/
function requireAllPNG(r) {
  r.keys().forEach(r);
}
requireAllPNG(require.context("../img/", true, /\.png$/));

// These grab all svgs in assets/svg/
function requireAllSVG(r) {
  r.keys().forEach(r);
}
requireAllSVG(require.context("../svg/", true, /\.svg$/));

console.log("Success!");
