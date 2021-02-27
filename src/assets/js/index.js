import "../sass/main.scss";

import "../img/favicon.png";

// This line grabs all svgs in ./assets/svg/
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context("../svg/", true, /\.svg$/));

console.log("Success!");

// ### From Codepen
const canvas = document.querySelector(".intro__canvas");
const ctxt = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let particleArray;
const numberOfParticles = 75;

const mouse = {
  x: null,
  y: null,
};

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

setInterval(() => {
  mouse.x = undefined;
  mouse.y = undefined;
});

// Particle class
class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }

  draw() {
    ctxt.beginPath();
    ctxt.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctxt.fillStyle = this.color;
    ctxt.fill();
  }

  update() {
    this.size -= 0.1;

    if (this.size < 0) {
      this.x = mouse.x + (Math.random() * 20 - 10);
      this.y = mouse.y + (Math.random() * 20 - 10);
      this.size = Math.random() * 5 + 5;
      this.weight = Math.random() * 2 - 0.5;
    }

    this.y += this.weight;
    this.weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -0.4;
    }
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 10 + 5;
    let color = "grey";
    let weight = 1;
    particleArray.push(new Particle(x, y, size, color, weight));
  }
}

function animate() {
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
  particleArray.forEach((particle) => {
    particle.update();
  });
  connect();
  requestAnimationFrame(animate);
}

function animateButton() {}

setTimeout(() => {
  init();
  animate();
}, 4500);

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let pA = particleArray[a];
      let pB = particleArray[b];
      let distance = Math.sqrt(
        (pA.x - pB.x) * (pA.x - pB.x) + (pA.y - pB.y) * (pA.y - pB.y)
      );
      if (distance < 200) {
        opacityValue = 1 - distance / 10000;
        ctxt.strokeStyle = `rgba(157, 80, 230, ${opacityValue})`;

        ctxt.beginPath();
        ctxt.lineWidth = 0.1;
        ctxt.moveTo(pA.x, pA.y);
        ctxt.lineTo(pB.x, pB.y);
        ctxt.stroke();
      }
    }
  }
}

$("#intro-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#Nav").offset().top,
    },
    1000
  );
});
