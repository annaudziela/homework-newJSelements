
const addButton = document.querySelector(".add-button");
let counter = 0;

addButton.addEventListener('click', () => {

const listElement = document.createElement("li");
listElement.className = "list-item";
listElement.id = "listItem";
listElement.innerText = `I am the ${++counter} item on the list`;
const list = document.querySelector('.list');
list.appendChild(listElement);
});