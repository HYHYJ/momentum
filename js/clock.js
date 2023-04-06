const clock = document.querySelector("h2#clock");

function getClock() { // 이 함수를 매 2초마다 실행
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000); //(무엇을 늦게 보이게 할껀지, 몇초) 지정한 초뒤에 보임