import { getTopNavHeight } from "./util.js";

// navAdj makes sure the line is in the appropriate spot when you click
// an item in the top nav menu
let navAdj = getTopNavHeight() + 25;
let sections = {
  HOME: {
    TOP:
      document.querySelector("#Intro").getBoundingClientRect().top +
      window.scrollY,
    NAVBOX: document.querySelector("#HomeNav"),
  },
  ABOUT: {
    TOP:
      document.querySelector("#About").getBoundingClientRect().top +
      window.scrollY -
      navAdj,
    NAVBOX: document.querySelector("#AboutNav"),
  },
  SKILLS: {
    TOP:
      document.querySelector("#Skills").getBoundingClientRect().top +
      window.scrollY -
      navAdj,
    NAVBOX: document.querySelector("#SkillsNav"),
  },
  PORTFOLIO: {
    TOP:
      document.querySelector("#Portfolio").getBoundingClientRect().top +
      window.scrollY -
      navAdj,
    NAVBOX: document.querySelector("#PortfolioNav"),
  },
  CONTACT: {
    TOP:
      document.querySelector("#Contact").getBoundingClientRect().top +
      window.scrollY -
      navAdj,
    NAVBOX: document.querySelector("#ContactNav"),
  },
};
let currentSection = sections.HOME;
console.log(sections.PORTFOLIO.TOP);

// Initialize the line
const line = document.querySelector("#NavSlider");
line.section = sections.HOME;
moveLineTo(sections.HOME.NAVBOX);

// Scroll Event Listener
addEventListener("scroll", (event) => {
  currentSection = getCurrentSection();

  if (currentSection == line.section) {
    // Do Nothing
  } else {
    moveLineTo(currentSection.NAVBOX);
  }
});

// ### Helper Functions
// target is a NavBox element
function moveLineTo(target) {
  line.section = target;
  let top =
    target.firstElementChild.offsetHeight + target.firstElementChild.offsetTop;
  let width = target.firstElementChild.offsetWidth;
  let left =
    target.offsetLeft +
    parseFloat(
      window.getComputedStyle(target, null).getPropertyValue("padding-left")
    );

  line.style.top = `${top}px`;
  line.style.width = `${width}px`;
  line.style.left = `${left}px`;
}

function getCurrentSection() {
  if (0 <= window.scrollY && window.scrollY < sections.ABOUT.TOP) {
    return sections.HOME;
  } else if (window.scrollY + innerHeight >= document.body.scrollHeight) {
    return sections.CONTACT;
  } else if (
    sections.ABOUT.TOP <= window.scrollY &&
    window.scrollY < sections.SKILLS.TOP
  ) {
    return sections.ABOUT;
  } else if (
    sections.SKILLS.TOP <= window.scrollY &&
    window.scrollY < sections.PORTFOLIO.TOP
  ) {
    return sections.SKILLS;
  } else if (
    sections.PORTFOLIO.TOP <= window.scrollY &&
    window.scrollY < sections.CONTACT.TOP
  ) {
    return sections.PORTFOLIO;
  } else if (sections.CONTACT.TOP <= window.scrollY) {
    return sections.CONTACT;
  }
}
