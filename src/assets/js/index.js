// Import Javscript
import "./intro-animation.js";
import "./document-nav.js";
import "./portfolio-links.js";
import "./nav-highlight.js";

// Import Sass
import "../sass/main.scss";

// Import all pngs in assets/png/
function requireAllPNG(r) {
  r.keys().forEach(r);
}
requireAllPNG(require.context("../img/", true, /\.png$/));

// Import all svgs in assets/svg/
function requireAllSVG(r) {
  r.keys().forEach(r);
}
requireAllSVG(require.context("../svg/", true, /\.svg$/));
