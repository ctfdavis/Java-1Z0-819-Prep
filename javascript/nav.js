const nav = document.querySelector('.nav__icon');
const nav_svg = document.querySelector('.nav__icon__svg');
const navLinks = document.querySelector('.nav__links');
let isOpen = false;

const toggleNav = () => {
    isOpen ? navLinks.style.display = 'none' : navLinks.style.display = 'flex';
    nav_svg.classList.toggle("nav__icon__svg--open");
    isOpen = !isOpen;
}

nav.addEventListener('click', toggleNav);