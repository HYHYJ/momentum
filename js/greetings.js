//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginBotton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요한 정보가 아니라서 대문자로 표기
const USERNAME_KEY = "username";

function onLoginSubumit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username )
    //greeting.innerText = "Hello " + username;
    paintGreeting(username) //두번 반복되어서 함수로 묶어줌
}

function paintGreeting(username) { //이름을 띄어주고 환영문구를 보여주게하는
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubumit) ;
} else {
    paintGreeting(savedUsername)
}