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
    {
        "word": "reference type",
        "definition": "A reference type is a means to access the object it references stored in memory. The memory location of the object is not known by the programmers. All programmers need to know is that they have references that can point to those objects they need. All reference types are a subclass of type java.lang.Object."
    },
    {
        "word": "subtype",
        "definition": "We say that X is a subtype of Y if X extends or implements Y."
    },
    {
        "word": "supertype",
        "definition": "We say that Y is a supertype of X if X extends or implements Y."
    },
    {
        "word": "cast",
        "definition": "Cast can mean two things: (1) the transformation of one value type to another; (2) the way you make (1) happen in Java."
    },
]

const template = (word, definition) => `<details class="details" id=${word}><summary class="summary">${word}</summary><p>${definition}</p></details>`;

keywords.forEach(item => {
    var child = document.createElement('li');
    child.innerHTML = template(item.word, item.definition);
    document.querySelector('.keywords').appendChild(child);
})