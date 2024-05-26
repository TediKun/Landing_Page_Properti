// Navbar
const btnNavbar = document.querySelector("[data-btn-navbar]");
const navMenu = document.querySelector("[data-nav-menu]");
const btnCloseNav = document.querySelector("[data-btn-closenav]");
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
