const clock = document.querySelector("h2#clock");

function sayHello() { // 이 함수를 매 2초마다 실행
    console.log("hello");
}

setInterval(sayHello, 5000); //(무엇을 반복할껀지, 몇초) 지정한 초마다 업데이트