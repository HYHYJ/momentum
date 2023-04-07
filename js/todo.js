const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify (toDos)); // JSON.stringify (toDos) 함으로 string으로 바뀜
}

function deletToDo(event) {
    const li = event.target.parentElement; //target은 button, button의 부모 찾기 li
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDos.push(newTodo);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   paintToDo(newTodo);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);