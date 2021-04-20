var darkMode;
var toggle = 0;
var container = document.querySelector(".container");
var sizeControlIcons = document.querySelectorAll(".size-control__icon");
var backToTopIcon = document.querySelector(".backToTop");
var themeIcon = document.querySelector(".theme");
var root_theme = document.querySelector(":root");
// --link-color: #72e789;

const themeToggle = () => {
    container.classList.toggle("container--dark");
    themeIcon.classList.toggle('theme--dark');
    if (backToTopIcon !== null) {
        backToTopIcon.classList.toggle("backToTop--dark");
    }
    if (typeof sizeControlIcons !== 'undefined') {
        sizeControlIcons.forEach((icon) => {
            icon.classList.toggle("size-control__icon--dark");
        })
    }
    if (toggle === 0) {
        localStorage.setItem('dark-mode', 'dark');
        root_theme.style.setProperty('--emphasis-color', "#f699cd");
        root_theme.style.setProperty('--link-color', "#72e789");
        root_theme.style.setProperty('--comment-color', '#dcdcdc');
        root_theme.style.setProperty('--code-block', "#4b4b4b");
        toggle = 1;
    }
    else {
        localStorage.setItem('dark-mode', 'light');
        root_theme.style.setProperty('--emphasis-color', "#f13232");
        root_theme.style.setProperty('--link-color', "#354A12");
        root_theme.style.setProperty('--comment-color', '#4b4b4b');
        root_theme.style.setProperty('--code-block', "#d7fae7");
        toggle = 0;
    }
}

themeIcon.addEventListener("click", themeToggle);

darkMode = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : "light";

localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    container.classList.add("container--dark");
    themeIcon.classList.add('theme--dark');
    root_theme.style.setProperty('--emphasis-color', "#f699cd");
    root_theme.style.setProperty('--link-color', "#72e789");
    root_theme.style.setProperty('--comment-color', '#dcdcdc');
    root_theme.style.setProperty('--code-block', "#4b4b4b");
    if (backToTopIcon !== null) {
        backToTopIcon.classList.add("backToTop--dark");
    }
    if (typeof sizeControlIcons !== 'undefined') {
        sizeControlIcons.forEach((icon) => {
            icon.classList.add("size-control__icon--dark");
        })
    }
    toggle = 1;
}