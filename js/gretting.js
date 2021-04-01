const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings"); 

const  USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); 
}


function handleSumbit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSumbit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`;
}


function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }   else {
        paintGreeting(currentUser);
    }

    
}


function init(){
    loadname();
}
init();