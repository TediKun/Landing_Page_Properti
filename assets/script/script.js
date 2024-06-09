// Navbar
const btnNavbar = document.querySelector("[data-btn-navbar]");
const navMenu = document.querySelector("[data-nav-menu]");
const btnCloseNav = document.querySelector("[data-btn-closenav]");
const navLink = document.querySelectorAll(".nav_link");

btnNavbar.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
btnCloseNav.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
window.addEventListener("click", e => {
    if (!navMenu.contains(e.target) && !btnNavbar.contains(e.target)) {
        navMenu.classList.remove("active");
    }
});
navLink.forEach(function (val, i) {
    navLink[i].addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
window.addEventListener("scroll", function () {
    const topBar = document.querySelector(".top-bar");
    topBar.classList.toggle("sticky", window.scrollY > 0);
});
// Thema
const btnThema = document.querySelectorAll("[data-btn-thema]");
const HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
if (sessionStorage.getItem("thema")) {
    HTML.dataset.thema = sessionStorage.getItem("thema");
} else {
    HTML.dataset.thema = isDark ? "Dark" : "Light";
    sessionStorage.setItem("thema", HTML.dataset.thema);
}
btnThema.forEach(i => {
    i.addEventListener("click", function () {
        HTML.dataset.thema =
            sessionStorage.getItem("thema") === "Light" ? "Dark" : "Light";
        sessionStorage.setItem("thema", HTML.dataset.thema);
    });
});

// FAQ
const btnAccordion = document.querySelectorAll(".btn_accordion");
const contentAccordion = document.querySelectorAll(".panel");
const icnAccordion = document.querySelectorAll(".icon_wrap_accordion");
for (let i = 0; i < btnAccordion.length; i++) {
    btnAccordion[i].addEventListener("click", function () {
        icnAccordion[i].classList.toggle("active");
        contentAccordion[i].classList.toggle("active");
    });
}
