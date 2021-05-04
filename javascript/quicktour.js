var quicktourBtn = document.querySelector('.quicktour__btn');
var quicktourModal = document.querySelector('.quicktour__modal');
var firsttime = localStorage.getItem('revisit') || false;
var quicktourModalIsOpen = false;
var quicktourIsRunning = false;
var quicktourRunBtn = document.querySelector('.quicktour__start');
var quicktourEndBtn = document.querySelectorAll('.quicktour__end');
var quicktourLaunch = document.querySelector('.quicktour-launch');

var quicktourIdx = 0;

// var quicktour = [
//     {"step": "1. the +/- buttons", "detail": "the <svg> <use xlink:href='./src/sprite.svg#icon-plus'></use> </svg> &amp; <svg> <use xlink:href='./src/sprite.svg#icon-minus'></use> </svg>"}
// ]

const openQuicktourModal = () => {
    if (!quicktourModalIsOpen && !quicktourIsRunning) {
        quicktourModal.style.opacity = '1';
        quicktourModal.style.visibility = 'visible';
        quicktourModalIsOpen = true;
    }
}

const closeQuicktourModal = () => {
    quicktourModal.style.opacity = '0';
    quicktourModal.style.visibility = 'hidden';
    localStorage.setItem('revisit', true);
    quicktourModalIsOpen = false;
}

const runQuicktour = () => {
    quicktourIsRunning = true;
    closeQuicktourModal();
    quicktourIdx = 0;
    quicktourLaunch.children[0].style.display = "flex";
}

const nextStep = () => {
    quicktourLaunch.children[quicktourIdx].style.display = "none";
    quicktourLaunch.children[quicktourIdx + 1].style.display = "flex";
    quicktourIdx++;
}
const prevStep = () => {
    quicktourLaunch.children[quicktourIdx].style.display = "none";
    quicktourLaunch.children[quicktourIdx - 1].style.display = "flex";
    quicktourIdx--;
}

const exitQuicktour = () => {
    if (quicktourIsRunning) {
        for (let i = 0; i < quicktourLaunch.children.length; i++) {
            quicktourLaunch.children[i].style.display = "none";
        }
        quicktourIsRunning = false;
    }
    closeQuicktourModal();
}


if (!firsttime) {
    openQuicktourModal();
}

quicktourBtn.addEventListener("click", () => {
    return quicktourModalIsOpen ? closeQuicktourModal() : openQuicktourModal();
})

quicktourRunBtn.addEventListener("click", runQuicktour);

quicktourEndBtn.forEach(item => {
    item.addEventListener('click', exitQuicktour);
})

document.querySelectorAll('.quicktour__next').forEach(item => {
    item.addEventListener('click', nextStep);
})
document.querySelectorAll('.quicktour__prev').forEach(item => {
    item.addEventListener('click', prevStep);
})