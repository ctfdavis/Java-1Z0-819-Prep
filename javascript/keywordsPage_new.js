const template = (word, def) => `<h2 class="card__title">${word}</h2><p class="card__details">${def}</p>`;

keywords.forEach(item => {
    var child = document.createElement('div');
    child.className = "card";
    child.innerHTML = template(item.word, item.definition);
    document.querySelector('.cards').appendChild(child);
})