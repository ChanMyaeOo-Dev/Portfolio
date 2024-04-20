// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import "animate.css";

// import ScrollReveal from "scrollreveal/dist/scrollreveal.min";
import ScrollReveal from "scrollreveal";
ScrollReveal({ reset: true }).reveal(".description_box", { delay: 250 });

ScrollReveal({ reset: true }).reveal(".headline2");
ScrollReveal({ reset: true }).reveal(".tagline", { delay: 500 });
ScrollReveal({ reset: true }).reveal(".punchline", { delay: 2000 });
ScrollReveal().reveal(".widget", { interval: 200 });
