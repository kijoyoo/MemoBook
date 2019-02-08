const ulToDo = document.querySelector(".main_toDo"),
    toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector(".toDoInput");

const TODO_LS = "toDoList",
     NAME = "name";

let todo = [];

function handleButton(event){
    const button = event.target;
    const delBtn = button.parentNode;
    ulToDo.removeChild(delBtn);
    const cleanList = todo.filter(function(newToDo){
        return newToDo.id !== parseInt(delBtn.id);
    });
    todo = cleanList;
    saveToDo();
    
    
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(todo));
}

function painting(text){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const id = todo.length +1;
    btn.innerText = "x";
    btn.addEventListener("click", handleButton);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(btn);
    li.id = id;
    ulToDo.appendChild(li);
    const toDoObj = {
        text: text, 
        id: id
    };
    todo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    painting(currentValue);
    toDoInput.value = ""
}

function loadToDo(){
    const loadToDo = localStorage.getItem(TODO_LS);
        if(loadToDo !== null){
            const parse = JSON.parse(loadToDo);
            parse.forEach(function(todos){
                painting(todos.text);
            });
        }
    
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();