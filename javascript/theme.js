var darkMode;
var toggle = 0;
var container = document.querySelector(".container");

const themeToggle = () => {
    container.classList.toggle("container--dark");
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
    toggle = 1;
}