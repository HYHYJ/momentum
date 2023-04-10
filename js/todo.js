const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify (toDos)); // JSON.stringify (toDos) 함으로 string으로 바뀜, localStorage는  string만 받음
}

function deletToDo(event) {
    const li = event.target.parentElement; //target은 button, button의 부모 찾기 li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) ); // 위에 li지울려는 것의 아이디인거 빼고 모두 리턴
    saveToDos();
} 
//윗윗줄 toDo 는 toDos DB에 있는 요소중 하나임. 이함수는 DB에 있는 모든것과 함께 실행.

function paintToDo(newTodo) { //newTodo라는 인수로 newTodoObj라는 object를 받고있음
    const li = document.createElement("li");
    li.id = newTodo.id; // newTodo = newTodoObj
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   const newTodoObj = {
     text: newTodo,
     id: Date.now(),
   };
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const paresdToDos = JSON.parse(savedToDos); //string이 아닌 Js에서 사용가능한 object로 변환
    toDos = paresdToDos;
    paresdToDos.forEach(paintToDo); //forEach 함수는 이 paintToDo를 parsedToDos= ToDos = [] 배열의 요소마다 실행한다.
} //forEach 는 paintToDo를 기본적으로 실행
//forEach는 각각의 아이템을 준다. 이젠 item이 object가 되는것

// array 삭제할때 진짜 일어나는 일은 지우고싶은 item을 제외하고(지우는거xx) 새 array를 만듬.(예전 array 존재)

//지우고싶은 item을 제외한다!  = .filter
