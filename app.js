const form = document.forms.todo;
const todo = form.elements.todoItem
const todoList = document.querySelector('.todo__list')
const counter = document.querySelector('.todo-numbers-title')

todoList.addEventListener('del', deleteItem);

function deleteItem(event){
    let target = event.target;
    console.log(target)
}



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

    let textOftodo = document.createElement('div')
    textOftodo.innerText = text
    textOftodo.classList.add('todo__task-info')

    todoDiv.appendChild(completeCheckBox)
    todoDiv.appendChild(textOftodo)

    console.log(todoDiv)
}

