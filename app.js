
const h1 = document.querySelector(".hello h1");

h1.innerText = "Click me!";



console.dir(h1);
//h1의 안에 내용을 브라우저 console에서 볼수있다. on~은 event를 의미한다.

//Event = 예를 들어 click , 마우스 커서 올리기, enter 누르기 등등..
// 이 Event들을 JS는 listen 할 수 있다.

//<Click Listen 하는 법>
function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color = "blue"; //대부분의 경우에는 style은 css를 통해서 변경되어야한다.
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
};
function handleWindowOffline() {
    alert("SoS no WIFI");
}
function handleWindowOnline() {
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleClick); //클릭하면 반응
h1.addEventListener("mouseenter",handleMouseEnter ); //마우스 올리면 반응
h1.addEventListener("mouseleave",handleMouseLeave );
//handleTitleClick() //함수 실행방법 : 이름() 두괄호는 실행버튼이다.


window.addEventListener("resize", handleWindowResize );//화면크기조절에 반응
window.addEventListener("copy", handleWindowCopy );//카피에 반응
window.addEventListener("offline", handleWindowOffline ); //와이파이 꺼짐
window.addEventListener("online", handleWindowOnline ); //와이파이 켜짐

#3.6