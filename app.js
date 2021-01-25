
const form = document.forms.todo;
const todo = form.elements.todoItem
const searchForm = document.forms.todoSearch
const searchTodo = searchForm.elements.todoItemSearch
const arrayTodoList = document.querySelectorAll('.todo__list')
const todoList = document.querySelector('.todo__list')
const counterHtmlElement = document.querySelector('.todo-number-title')
const sortButtons = document.querySelector('.todo__button__block-container')
const pictureAddNewTodo = document.querySelector('.todo__input-checkbox')
const input = document.querySelector('input');
const log = document.getElementById('log');

searchTodo.addEventListener('keyup', searchTodos);
searchTodo.addEventListener('blur', loseFocusAfterSearch);
//serch todo's by name
function searchTodos(event) {
    const todoParagText = document.querySelectorAll('.todo__task-info')
    event.preventDefault();
    todoParagText.forEach(elem=>{
        if(!elem.textContent.includes(searchTodo.value)){
                elem.parentElement.style.visibility = "hidden";
                elem.parentElement.style.height = "0px";
        }else{
            elem.parentElement.style.visibility = "visible";
            elem.parentElement.style.height = "100%";
        }
    })
}
// show all finded todo's
function loseFocusAfterSearch(event){
    event.preventDefault();
    const allElements = document.querySelectorAll('.todo__task')
        allElements.forEach(elem=>{
            elem.style.visibility = "visible";
            elem.style.height = "100%";
        })
}

//event listeners
sortButtons.addEventListener('click', SortHtmlTodoItems)
todoList.addEventListener('click', deleteItemAndCheckTodo);
form.addEventListener('submit', formSubmit);
pictureAddNewTodo.addEventListener('click', formSubmit);
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
    if(value != false){
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
        counterHtmlElement.textContent = todoCounter

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
    const allElements = document.querySelectorAll('.todo__task')
    // const parent = itemOfTodoHtmlList.parentElement
    if(itemOfTodoHtmlList.classList == 'todo__button__block-all'){
        //show all todo's
        allElements.forEach(elem=>{
                elem.style.visibility = "visible";
                elem.style.height = "100%";
            })
    }else if(itemOfTodoHtmlList.classList == 'todo__button__block-activetask'){     
        //hide all checked   
        allElements.forEach(elem=>{
            if(elem.classList.toString().includes('checked')){
                elem.style.visibility = "hidden";
                elem.style.height = "0";
            }else{
                elem.style.visibility = "visible";
                elem.style.height = "100%";
            }
        })
    }else if(itemOfTodoHtmlList.classList == 'todo__button__block-completed'){
        //hide all todo's with NO chacked class 
        allElements.forEach(elem=>{
            if(!elem.classList.toString().includes('checked')){
                elem.style.visibility = "hidden";
                elem.style.height = "0";
            }else{
                elem.style.visibility = "visible";
                elem.style.height = "100%";
            }
                
        })

    }

}
