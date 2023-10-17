
// Scroll-Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Language-Switcher
var lang = "en";
var current = document.getElementById("lang-current");
var sitede = document.getElementById("site-de");
var siteen = document.getElementById("site-en");

function changeLang() {
  if (lang === "en") {
    lang = "de";
    current.style.left = "2px";
    sitede.style.display = "block";
    siteen.style.display = "none";
  } else {
    lang = "en";
    current.style.left = "50px";
    sitede.style.display = "none";
    siteen.style.display = "block";
  }
}

// Background-Particles
window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#ffffff',
    connectParticles: true
  });
};
