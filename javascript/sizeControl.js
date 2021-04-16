const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
const plus = document.querySelector('.size-control__icon-plus');
const minus = document.querySelector('.size-control__icon-minus');

const changeSize = (factor) => {
    let smaller = rootStyle.getPropertyValue('--smaller');
    let regular = rootStyle.getPropertyValue('--regular');
    let big = rootStyle.getPropertyValue('--big');
    let bigger = rootStyle.getPropertyValue('--bigger');
    let biggest = rootStyle.getPropertyValue('--biggest');
    root.style.setProperty('--smaller', parseFloat(smaller, 10) * factor + 'rem');
    root.style.setProperty('--regular', parseFloat(regular, 10) * factor + 'rem');
    root.style.setProperty('--big', parseFloat(big, 10) * factor + 'rem');
    root.style.setProperty('--bigger', parseFloat(bigger, 10) * factor + 'rem');
    root.style.setProperty('--biggest', parseFloat(biggest, 10) * factor + 'rem');
}

plus.addEventListener("click", () => {changeSize(1.1111111111)});
minus.addEventListener("click", () => {changeSize(0.9)});