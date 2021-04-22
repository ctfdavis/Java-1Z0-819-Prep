const codeBlocks = document.querySelectorAll('code.preformat');

// const toggleComment = () => {
    // codeBlocks.forEach(item => {
        // item.classList.toggle("commentOff");
    // })
    // this.classList.toggle("commentOff");
// }

codeBlocks.forEach(item => {
    const toggleComment = () => {
        item.classList.toggle("commentOff");
    }
    var commentToggle = document.createElement('button');
    commentToggle.addEventListener("click", () => toggleComment());
    commentToggle.className = "commentToggle";
    commentToggle.innerHTML = "C";
    item.appendChild(commentToggle);
});