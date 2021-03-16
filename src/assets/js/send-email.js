import axios from "axios";
import Modal from "./Modal";

var form = document.querySelector("#ContactForm");

form.onsubmit = (event) => {
  event.preventDefault();
  let data = new FormData();

  data.append("name", document.querySelector("#NameInput").value);
  data.append("email", document.querySelector("#EmailInput").value);
  data.append("message", document.querySelector("#MessageInput").value);
  data.append("csrfmiddlewaretoken", CSRF_TOKEN);

  axios
    .post("send_email/", data)
    .then((res) => {
      let modal = new Modal(
        "Email Delivered",
        "Your email was successfully sent to atummillo.dev@gmail.com. I look forward to speaking with you!<br/><br/> - Tony",
        "Done"
      );
      modal.render("");
      form.reset();
    })
    .catch((errors) => {
      alert(
        "I'm sorry, there was an issue with your message. Please try again!"
      );
    });
};
