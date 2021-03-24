class BurgerNav {
  constructor(scrollFunc) {
    this.menu = document.createElement("div");
    this.menu.setAttribute("class", "burger__menu");

    // Home/Intro
    this.home = document.createElement("span");
    this.home.setAttribute("class", "burger__menu--home t2 t2--white");
    this.home.innerHTML = "Home";
    this.home.onclick = () => {
      this.closeBurger();
      scrollFunc("#Intro");
    };

    // About
    this.about = document.createElement("span");
    this.about.setAttribute("class", "burger__menu--about t2 t2--white");
    this.about.innerHTML = "About";
    this.about.onclick = () => {
      this.closeBurger();
      scrollFunc("#About");
    };

    // Skills
    this.skills = document.createElement("span");
    this.skills.setAttribute("class", "burger__menu--skills t2 t2--white");
    this.skills.innerHTML = "Skills";
    this.skills.onclick = () => {
      this.closeBurger();
      scrollFunc("#Skills");
    };

    // Portfolio
    this.portfolio = document.createElement("span");
    this.portfolio.setAttribute(
      "class",
      "burger__menu--portfolio t2 t2--white"
    );
    this.portfolio.innerHTML = "Portfolio";
    this.portfolio.onclick = () => {
      this.closeBurger();
      scrollFunc("#Portfolio");
    };

    // Contact
    this.contact = document.createElement("span");
    this.contact.setAttribute("class", "burger__menu--contact t2 t2--white");
    this.contact.innerHTML = "Contact";
    this.contact.onclick = () => {
      this.closeBurger();
      scrollFunc("#Contact");
    };

    // Resume
    this.resume = document.createElement("button");
    this.resume.setAttribute("class", "burger__menu--resume b1-mobile");
    this.resume.innerHTML = "Resume";
    this.resume.onclick = () => {
      window.open(
        "https://drive.google.com/file/d/1mfoNuT3CZuotS0W1IBltE3L9bv5xdDUT/view?usp=sharing",
        "_blank"
      );
    };

    // Add all items to the menu
    this.menu.appendChild(this.home);
    this.menu.appendChild(this.about);
    this.menu.appendChild(this.skills);
    this.menu.appendChild(this.portfolio);
    this.menu.appendChild(this.contact);
    this.menu.appendChild(this.resume);
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
