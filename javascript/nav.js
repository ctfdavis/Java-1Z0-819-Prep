const nav = document.querySelector('.nav__icon');
const navLinks = document.querySelector('.nav__links');
let isOpen = false;

const toggleNav = () => {
    isOpen ? navLinks.style.display = 'none' : navLinks.style.display = 'flex';
    isOpen = !isOpen;
}

nav.addEventListener('click', toggleNav);