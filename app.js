const form = document.forms.todo;
const todo = form.elements.todoItem
const arrayTodoList = document.querySelectorAll('.todo__list')
const todoList = document.querySelector('.todo__list')
const counterHtmlElement = document.querySelector('.todo-number-title')
const sortButtons = document.querySelector('.todo__button__block-container')

//event listeners
sortButtons.addEventListener('click', SortHtmlTodoItems)
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
            completed: false,
            active: true,
            id: newCreatedId
        })
        let id = newCreatedId
        let todoText = value
        todoList.innerHTML += `<div class="todo__task" id="${id}">
                                <input type='checkbox' class="todo__task-checkbox" name="" id="">
                                <p class="todo__task-info">${todoText}</p>
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
    const htmlTextTodo = parent.querySelector('.todo__task-info')
    const idOfTodoDiv = parent.getAttribute("id")


    if(itemOfTodoHtmlList.classList == 'todo__task-delete'){
        parent.remove()
        arraylistOfTodos.splice(idOfTodoDiv)
        todoCounter -= 1
    }else if(itemOfTodoHtmlList.classList == 'todo__task-checkbox'){
                parent.classList.toggle('checked')
                parent.style.visibility = "hidden";
                parent.style.height = "0px";
                htmlTextTodo.classList.toggle('line')
                }
        for (let elem of arraylistOfTodos){
            if(elem.id === idOfTodoDiv){
                elem.completed = true
            }
        }
}

//sort items of html todo

function SortHtmlTodoItems(event){

    const itemOfTodoHtmlList = event.target;
    const checkedElements = document.querySelectorAll('.checked')
    // const parent = itemOfTodoHtmlList.parentElement

    if(itemOfTodoHtmlList.classList == 'todo__button__block-all'){
        console.log('ahow all')
    }else if(itemOfTodoHtmlList.classList == 'todo__button__block-activetask'){
        console.log(checkedElements)
        // parent.classList.toggle('checked')
        // parent.style.visibility = "hidden";
    }else if(itemOfTodoHtmlList.classList == 'todo__button__block-completed'){

        todoList.childNodes.forEach(elem=>{
            
        })

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