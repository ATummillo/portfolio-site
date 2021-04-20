class BurgerNav {
  constructor(scrollFunc) {
    this.menu = document.createElement("div");
    this.menu.setAttribute("class", "burger__menu");

    /*
        Section Links
    */
    // Home/Intro
    let home = document.createElement("span");
    home.setAttribute("class", "burger__menu--home t2 t2--white");
    home.innerHTML = "Home";
    home.onclick = () => {
      this.closeBurger();
      scrollFunc("#Intro");
    };

    // About
    let about = document.createElement("span");
    about.setAttribute("class", "burger__menu--about t2 t2--white");
    about.innerHTML = "About";
    about.onclick = () => {
      this.closeBurger();
      scrollFunc("#About");
    };

    // Skills
    let skills = document.createElement("span");
    skills.setAttribute("class", "burger__menu--skills t2 t2--white");
    skills.innerHTML = "Skills";
    skills.onclick = () => {
      this.closeBurger();
      scrollFunc("#Skills");
    };

    // Portfolio
    let portfolio = document.createElement("span");
    portfolio.setAttribute("class", "burger__menu--portfolio t2 t2--white");
    portfolio.innerHTML = "Portfolio";
    portfolio.onclick = () => {
      this.closeBurger();
      scrollFunc("#Portfolio");
    };

    // Contact
    let contact = document.createElement("span");
    contact.setAttribute("class", "burger__menu--contact t2 t2--white");
    contact.innerHTML = "Contact";
    contact.onclick = () => {
      this.closeBurger();
      scrollFunc("#Contact");
    };

    // Resume
    let resume = document.createElement("button");
    resume.setAttribute("class", "burger__menu--resume b1-mobile");
    resume.innerHTML = "Resume";
    resume.onclick = () => {
      window.open(
        "https://drive.google.com/file/d/1nvPtTpzd9RLkMPDfZL4lvJtAAQVm_r-8/view?usp=sharing",
        "_blank"
      );
    };

    /*
        Social Icons
    */
    //Github
    let githubSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let githubUse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    githubUse.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#icon-github"
    );
    githubSVG.setAttribute("class", "burger__menu--github burger__social-icon");
    githubSVG.appendChild(githubUse);
    githubSVG.onclick = () => {
      window.open("https://github.com/ATummillo", "_blank");
    };

    //LinkedIn
    let linkedinSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let linkedinUse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    linkedinUse.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#icon-linkedin"
    );
    linkedinSVG.setAttribute(
      "class",
      "burger__menu--linkedin burger__social-icon"
    );
    linkedinSVG.appendChild(linkedinUse);
    linkedinSVG.onclick = () => {
      window.open("https://www.linkedin.com/in/anthonytummillo/", "_blank");
    };

    //Codepen
    let codepenSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let codepenUse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    codepenUse.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#icon-codepen"
    );
    codepenSVG.setAttribute(
      "class",
      "burger__menu--codepen burger__social-icon"
    );
    codepenSVG.appendChild(codepenUse);
    codepenSVG.onclick = () => {
      window.open("https://codepen.io/ATummillo/", "_blank");
    };

    //Dockerhub
    let dockerhubSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let dockerhubUse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    dockerhubUse.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "#icon-docker"
    );
    dockerhubSVG.setAttribute(
      "class",
      "burger__menu--dockerhub burger__social-icon burger__social-icon--docker"
    );
    dockerhubSVG.appendChild(dockerhubUse);
    dockerhubSVG.onclick = () => {
      window.open("https://registry.hub.docker.com/u/atummillo", "_blank");
    };

    let socialContainer = document.createElement("div");
    socialContainer.setAttribute("class", "burger__social");
    socialContainer.appendChild(githubSVG);
    socialContainer.appendChild(linkedinSVG);
    socialContainer.appendChild(codepenSVG);
    socialContainer.appendChild(dockerhubSVG);

    // Add all items to the menu
    this.menu.appendChild(home);
    this.menu.appendChild(about);
    this.menu.appendChild(skills);
    this.menu.appendChild(portfolio);
    this.menu.appendChild(contact);
    this.menu.appendChild(resume);
    this.menu.appendChild(socialContainer);
    // console.log(githubSVG);
  }

  closeBurger() {
    this.menu.remove();
  }

  render() {
    let burger = document.querySelector(".burger");
    burger.appendChild(this.menu);
  }
}

export default BurgerNav;
