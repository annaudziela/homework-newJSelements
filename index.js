
const addButton = document.querySelector(".add-button");
const inputButton = document.querySelector(".input-button");
const input = document.querySelector(".input");


let counter = 0;

addButton.addEventListener('click', () => {

    const listElement = document.createElement("li");
    listElement.className = "list-item";
    listElement.id = "listItem";
    listElement.innerText = `I am the ${++counter} item on the list`;
    const list = document.querySelector('.list');
    list.appendChild(listElement);
});

inputButton.addEventListener('click', () => {

    const form = document.querySelector('.form');
    const myIdea = input.value;
    const newElement = document.createElement("li");
    newElement.className = "list-item";
    newElement.id = "list-item";
    newElement.innerText = `${myIdea}`;
    const list = document.querySelector('.list');
    list.appendChild(newElement);
    form.reset();

    if (myIdea == "") {
        alert('Your list will look better when you put here something 🤓')
    }
    
});
