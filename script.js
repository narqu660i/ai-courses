// === HAMBURGER MENU ===

const menuBtn = document.querySelector(".menu-btn");
const line = document.querySelector(".line");
const mainMenu = document.querySelector(".main-menu");

menuBtn.addEventListener("click", () => {
  line.classList.toggle("active");
  mainMenu.classList.toggle("active");
});

// === Testimonials ===

const gap = 30;
const container = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");

document.querySelector(".button-right").addEventListener("click", function () {
  const scrollAmount = testimonial.offsetWidth + gap;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (container.scrollLeft + scrollAmount <= maxScrollLeft) {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else {
    container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
  }
});

document.querySelector(".button-left").addEventListener("click", function () {
  const scrollAmount = testimonial.offsetWidth + gap;

  if (container.scrollLeft - scrollAmount >= 0) {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollTo({ left: 0, behavior: "smooth" });
  }
});
