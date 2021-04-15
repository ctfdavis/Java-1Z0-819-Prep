var keywords = [
    {
        "word": "Object",
        "definition": "An Object in Java is an entity that contains a state and behaviours defined by its variables and methods."
    },
    {
        "word": "unboxing",
        "definition": "The automatic conversion from a wrapper class to its corresponding primitive type that the Java compiler makes under the hood."
    },
    {
        "word": "autoboxing",
        "definition": "The automatic conversion from a primitive type to its corresponding wrapper class that the Java compiler makes under the hood."
    },
]

const template = (word, definition) => `<details class="details" id=${word}><summary class="summary">${word}</summary><p>${definition}</p></details>`;

keywords.forEach(item => {
    var child = document.createElement('li');
    child.innerHTML = template(item.word, item.definition);
    document.querySelector('.keywords').appendChild(child);
})