document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-page").style.display = "none";
  }, 3000);
});

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "animate.css";

// import ScrollReveal from "scrollreveal/dist/scrollreveal.min";
import ScrollReveal from "scrollreveal";
ScrollReveal({ reset: true }).reveal(".description_box", { delay: 250 });
