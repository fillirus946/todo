const form = document.forms.todo;
const todo = form.elements.todoItem
const todoList = document.querySelector('.todo__list')
const counterHtmlElement = document.querySelector('.todo-number-title')

//event listeners
todoList.addEventListener('click', deleteItemAndCheckTodo);
form.addEventListener('submit', formSubmit);
//global values
let todoCounter = 0
const arraylistOfTodos = []

//id generation
const createRandId = () => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}


//onformsubmit
function formSubmit(event) {
    const id = createRandId()
    event.preventDefault();
    createNewTodoElement(todo.value, id)
    todo.value= ''

}
//creating new todo div and embed it in our code
function createNewTodoElement(value, id) {
    let newCreatedId = id
    if(value != ''){
        arraylistOfTodos.push({
            text: value,
            checked: false,
            completed: false,
            active: true,
            id: newCreatedId
        })
        let id = newCreatedId
        let todoText = value
        todoList.innerHTML += `<div class="todo__task" id="${id}">
                                                    <input type='checkbox' class="todo__task-checkbox" name="" id="">
                                                    <div class="todo__task-info">${todoText}</div>
                                                    <button class="todo__task-delete">X</button>
                                                    </div>`
        todoCounter += 1

        counterHtmlElement.textContent = todoCounter
        console.log(counterHtmlElement)
        
    }
}

// check action delete by X button or checkbox and perform
function deleteItemAndCheckTodo(event){

    const itemOfTodoHtmlList = event.target;
    const parent = itemOfTodoHtmlList.parentElement
    const idOfTodoDiv = parent.getAttribute("id")

    if(itemOfTodoHtmlList.classList[0] === 'todo__task-delete'){
        parent.remove()
        arraylistOfTodos.splice(idOfTodoDiv)
        todoCounter -= 1
        console.log(todoCounter)

    }else if(itemOfTodoHtmlList.classList[0] === 'todo__task-checkbox'){
        for (let elem of arraylistOfTodos){
            if(elem.id === idOfTodoDiv){
                elem.checked = true
                console.log(arraylistOfTodos)
            }
        }
    }
}

















// function createNewTodoElement(text) {
// //create new div
//     const todoDiv =document.createElement("div")
//     todoDiv.classList.add('todo__task')
// //create new checkbox in div
//     const completeCheckBox = document.createElement("input")
//     completeCheckBox.classList.add('todo__task-checkbox')
//     completeCheckBox.setAttribute('type', 'checkbox');
// //create new title of todo in div
//     const textOftodo = document.createElement('div')
//     textOftodo.innerText = text
//     textOftodo.classList.add('todo__task-info')
// //create new delete button in div
//     const deleteButton = document.createElement('button')
//     deleteButton.classList.add('todo__task-delete')
//     deleteButton.innerText = 'delete'

// //append all in list
//     todoDiv.appendChild(completeCheckBox)
//     todoDiv.appendChild(textOftodo)
//     todoDiv.appendChild(deleteButton)

//     todoList.appendChild(todoDiv)

// }