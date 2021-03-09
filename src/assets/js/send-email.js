import axios from "axios";

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
      alert(
        "Your email was successfully sent. I look forward to speaking with you!"
      );
      form.reset();
    })
    .catch((errors) => {
      alert(
        "I'm sorry, there was an issue with your message. Please try again!"
      );
    });
};
