const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');

const todoItemConatiner = document.getElementById('todo-item-container');

addBtn.addEventListener('click', ()=>{
    const value = todoInput.value;
    
    const li = document.createElement('li');
    li.innerText = value;

    const delButton = document.createElement('button');
    delButton.innerText = 'x'

    delButton.addEventListener('click', function(){
        li.remove()
    })


    li.appendChild(delButton);
    todoItemConatiner.appendChild(li);

    todoInput.value = '';
    
})