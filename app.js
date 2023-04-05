
const h1 = document.querySelector("div.hello:first-child h1");

h1.innerText = "Click me!";

//<클릭할때마다 색깔바꾸게하기>
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick); //클릭하면 반응

//1. element 를 찾아라. document안에 div, h1 등등
//2. event를 listen 해라