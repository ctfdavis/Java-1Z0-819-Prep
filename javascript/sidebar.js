var sidebar__icon = document.querySelector('.sidebar__icon');
var sidebar__btn = document.querySelector('.sidebar__btn');
var sidebar__links = document.querySelector('.sidebar__links');
var sidebar__link = document.querySelectorAll('.sidebar__link');
const expandSidebar = () => {
    sidebar__icon.classList.toggle('sidebar__icon--expand');
    sidebar__btn.classList.toggle('sidebar__btn--expand');
    sidebar__links.classList.toggle('sidebar__links--expand');
}

const collapseSidebar = () => {
    sidebar__icon.classList.remove('sidebar__icon--expand');
    sidebar__btn.classList.remove('sidebar__btn--expand');
    sidebar__links.classList.remove('sidebar__links--expand');
}

sidebar__btn.addEventListener('click', expandSidebar);
sidebar__link.forEach(item => {
    item.addEventListener('click', collapseSidebar);
});