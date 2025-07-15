// === HAMBURGER MENU ===

const menuBtn = document.querySelector(".menu-btn");
const line = document.querySelector(".line");
const mainMenu = document.querySelector(".main-menu")

menuBtn.addEventListener("click", () => {
    line.classList.toggle("active");
    mainMenu.classList.toggle("active");
})