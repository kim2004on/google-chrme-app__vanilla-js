const clockCantainer = document.querySelector(".js-clock"),
clockTitle = clockCantainer.querySelector("h1");


function getTime(){

    const date = new Date();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    const hour = date.getHours();
    clockTitle.innerText =`${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${second < 10 ? `0${second}` : second}`;

}


function init(){
setInterval(getTime, 1000);
}
init();