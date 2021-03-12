
const addButton = document.querySelector(".add-button");
const inputButton = document.querySelector(".input-button");
const input = document.querySelector(".input");
const list = document.querySelector('.list');

let counter = 0;

addButton.addEventListener('click', () => {

    const listElement = document.createElement("li");
    listElement.className = "list-item";
    listElement.id = "list-Item";
    listElement.innerText = `I am the ${++counter} item on the list`;
    list.appendChild(listElement);
});

inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    const myIdea = input.value;
    const newElement = document.createElement("li");
    newElement.className = "list-item";
    newElement.id = "list-item";
    newElement.innerText = myIdea;
    list.appendChild(newElement);
    input.value = "";

    if (myIdea == "") {
        alert('Your list will look better when you put here something 🤓')
    }

});
