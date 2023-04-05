//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginBotton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요한 정보가 아니라서 대문자로 표기

function onLoginSubumit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username )
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //spring + 변수 = `spring${변수}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


    loginForm.addEventListener("submit", onLoginSubumit);

    #4.6