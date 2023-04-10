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
}

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
console.log(savedToDos)

if(savedToDos !== null){
    const paresdToDos = JSON.parse(savedToDos); //string이 아닌 Js에서 사용가능한 object로 변환
    toDos = paresdToDos;
    paresdToDos.forEach(paintToDo); //forEach 함수는 이 paintToDo를 parsedToDos= ToDos = [] 배열의 요소마다 실행한다.
} //forEach 는 paintToDo를 기본적으로 실행
//forEach는 각각의 아이템을 준다. 이젠 item이 object가 되는것

// array 삭제할때 진짜 일어나는 일은 지우고싶은 item을 제외하고(지우는거xx) 새 array를 만듬.(예전 array 존재)

//지우고싶은 item을 제외한다!  = .filter

function sexyFilter() { //sexyFilter 함수는 반드시 true를 리턴해야한다. 만약 새 array에서 이 object를 유지하고싶으면. false가 리턴되면 그 item은  새array에 포함 xxx

}

[1, 2, 3, 4].filter(sexyFilter) //filter는 sexyFilter에 1,2,3,4를 넣어서 부를것임.

sexyFilter(1) =1//sexyFilter 함수는 반드시 true를 리턴해야한다.
sexyFilter(2) =2
sexyFilter(3) x 3 // 만약 3을 false 로 출력되면 1,2,4만 유지
sexyFilter(4) =4 // true면 유지되고 새로 만들어지는 array안에 1,2,3,4가 있다.