/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

addButton.addEventListener('click', ()=>{
    document.getElementById('empty-list').remove(li)
    let userInput = taskInput.value;

    let li = document.createElement('li');
    li.innerText = userInput;


    ul.appendChild(li);


})
