
const title = document.querySelector(".hello h1");

title.innerText = "Click me!";

//Event = 예를 들어 click , 마우스 커서 올리기, enter 누르기 등등..
// 이 Event들을 JS는 listen 할 수 있다.

//<Click Listen 하는 법>
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue";
}


title.addEventListener("click", handleTitleClick);

//handleTitleClick() //함수 실행방법 : 이름() 두괄호는 실행버튼이다.
