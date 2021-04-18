var darkMode;
var toggle = 0;
var container = document.querySelector(".container");
var sizeControlIcons = document.querySelectorAll(".size-control__icon");
var backToTopIcon = document.querySelector(".backToTop");
var themeIcon = document.querySelector(".theme");

const themeToggle = () => {
    container.classList.toggle("container--dark");
    themeIcon.classList.toggle('theme--dark');
    if (backToTopIcon !== null) {
        console.log(backToTopIcon);
        console.log(typeof backToTopIcon);
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

themeIcon.addEventListener("click", themeToggle);

darkMode = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : "light";

localStorage.setItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    container.classList.add("container--dark");
    themeIcon.classList.add('theme--dark');
    if (backToTopIcon !== null) {
        backToTopIcon.classList.add("backToTop--dark");
    }
    if (typeof sizeControlIcons !== 'undefined') {
        sizeControlIcons.forEach( (icon) => {
            icon.classList.add("size-control__icon--dark");
        })
    }
    toggle = 1;
}