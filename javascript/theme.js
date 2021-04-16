var darkMode;
var toggle = 0;
var container = document.querySelector(".container");
var sizeControlIcons = document.querySelectorAll(".size-control__icon");
var backToTopIcon = document.querySelector(".backToTop");

const themeToggle = () => {
    container.classList.toggle("container--dark");
    if (typeof backToTopIcon !== 'undefined') {
        backToTopIcon.classList.toggle("backToTop--dark");
    }
    if (typeof sizeControlIcons !== 'undefined') {
        sizeControlIcons.forEach( (icon) => {
            icon.classList.toggle("size-control__icon--dark");
        })
    }
    if (toggle === 0) {
        localStorage.setItem('dark-mode', 'dark');
        toggle = 1;
    }
    else {
        localStorage.setItem('dark-mode', 'light');
        toggle = 0;
    }   
}

document.querySelector(".nav__theme").addEventListener("click", themeToggle);

darkMode = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : "light";

localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    container.classList.add("container--dark");
    if (typeof backToTopIcon !== 'undefined') {
        backToTopIcon.classList.add("backToTop--dark");
    }
    if (typeof sizeControlIcons !== 'undefined') {
        sizeControlIcons.forEach( (icon) => {
            icon.classList.add("size-control__icon--dark");
        })
    }
    toggle = 1;
}