class Modal {
  constructor(title, message, btnText) {
    this.close = document.createElement("span");
    this.close.classList.add("modal__close");
    this.title = document.createElement("span");
    this.title.classList.add("modal__title");
    this.title.classList.add("t3");
    this.title.classList.add("t3--purple");
    this.line = document.createElement("div");
    this.line.classList.add("modal__line");
    this.line.classList.add("section-title__line");
    this.message = document.createElement("span");
    this.message.classList.add("modal__message");
    this.message.classList.add("form");
    this.message.innerHTML = message;
    this.button = document.createElement("button");
    this.button.classList.add("modal__btn");
    this.button.classList.add("b2");
    this.grid = document.createElement("div");
    this.grid.classList.add("modal__grid");
    this.grid.appendChild(this.close);
    this.grid.appendChild(this.title);
    this.grid.appendChild(this.line);
    this.grid.appendChild(this.message);
    this.grid.appendChild(this.button);
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");
    this.modal.appendChild(this.grid);

    // Set innerHTML for Modal
    this.close.innerHTML = "&times;";
    this.title.innerHTML = title;
    this.message.innerHTML = message;
    this.button.innerHTML = btnText;

    // Set remove modal functionality
    this.close.onclick = () => {
      this.modal.remove();
    };

    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.modal.remove();
      }
    };
  }

  render(btnLink) {
    document.body.appendChild(this.modal);

    if (btnLink == "") {
      this.button.onclick = () => {
        this.modal.remove();
      };
    } else {
      this.button.onclick = () => {
        window.open(btnLink, "_blank");
        this.modal.remove();
      };
    }
  }
}

export default Modal;
