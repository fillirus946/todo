const form = document.forms.todo;
const todo = form.elements.todoItem
const todoList = document.querySelector('.todo__list')
const counter = document.querySelector('.todo-numbers-title')

// todoList.addEventListener('click', deleteItem);

form.addEventListener('submit', enter);

const listOfTodos = ['efwe', 'wefwef', 'wefwe']

function enter(event) {
    event.preventDefault();

    console.log(todo.value);
    if(todo.value != ''){
        listOfTodos.push(todo.value)
    }

    console.log(listOfTodos);
    createElements(todo.value)
    todo.value= ''
}

function createElements(text) {

    const todoDiv =document.createElement("div")
    todoDiv.classList.add('todo__task')

    const completeCheckBox = document.createElement("input")
    completeCheckBox.classList.add('todo__task-checkbox')
    completeCheckBox.setAttribute('type', 'checkbox');

    const textOftodo = document.createElement('div')
    textOftodo.innerText = text
    textOftodo.classList.add('todo__task-info')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')

    todoDiv.appendChild(completeCheckBox)
    todoDiv.appendChild(textOftodo)
    todoDiv.appendChild(deleteButton)

    console.log(todoDiv)
}

// function deleteItem(event){
//     const item = event.target;
//     if(item.classList[0] === 'todo__task-delete'){
//         console.log(item)
//         item.remove()
//     }
//     console.log(target)
// }

