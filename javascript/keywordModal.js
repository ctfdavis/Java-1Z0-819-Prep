const keyword_selector = document.querySelectorAll('.keyword');

const popModal = (val) => {
    const keyword_obj = keywords.find((data) => {
        if (data.word.toUpperCase() === val.toUpperCase()) return data.definition;
    })
    const def = keyword_obj.definition;
    const word = keyword_obj.word;
    const modal = () => `<div class="modal__container"><button class="close-btn modal__close-btn" onClick="closeModal()"></button><h3 class="modal__keyword">${word}</h3><p class="modal__definition">${def}</p></div>`;
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal";
    modalContainer.innerHTML = modal();
    container.appendChild(modalContainer);
}

const closeModal = () => {
    container.removeChild(container.lastChild);
}

keyword_selector.forEach(selector => {
    const val = selector.innerHTML;
    selector.addEventListener("click", () => {popModal(val)});
});