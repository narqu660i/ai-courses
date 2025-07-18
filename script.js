
let selectedProduct = "";

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

// === FAQ ===

document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".faq-icon");

      document.querySelectorAll(".faq-content").forEach((el) => {
        if (el !== content) {
          el.style.maxHeight = null;
          el.previousElementSibling.querySelector(".faq-icon").style.transform =
            "rotate(0deg)";
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(45deg)";
      }
    });
  });
});

// Popup z zamówieniem

emailjs.init('EfDzvrswdcrdEvUsj');
window.emailjs = emailjs;

function openPopup(product) {
  selectedProduct = product;
  document.getElementById("course-name").value = product;
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
  document.getElementById("thanks").style.display = "none";

  document.getElementById("user_name").value = "";
  document.getElementById("user_email").value = "";
  document.getElementById("product_name").value = "";

  document.getElementById("thanksMessage").innerText = "";
}

function sendOrder(event) {
  event.preventDefault();

  const templateParams = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    product_name: selectedProduct,
  };

  emailjs.send("service_kphgpge", "template_owr63xb", templateParams).then(
    function (response) {
      console.log("Sukces!", response.status, response.text);
      closePopup();
      document.getElementById(
        "thanksMessage"
      ).innerText = `Zamówiłeś kurs: ${selectedProduct}`;
      document.getElementById("thanks").style.display = "flex";
    },
    function (error) {
      alert("Błąd podczas wysyłania wiadomości: " + error.text);
    }
  );
}
