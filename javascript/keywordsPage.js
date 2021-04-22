const template = (word, definition) => `<details class="details" id=${word}><summary class="summary">${word}</summary><p>${definition}</p></details>`;

keywords.forEach(item => {
    var child = document.createElement('li');
    child.innerHTML = template(item.word, item.definition);
    document.querySelector('.keywords').appendChild(child);
})