const clock = document.querySelector("#clock");


function currentTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour } : ${
            minute < 10 ? `0${minute}` : minute}`;
}

function init(){    
    currentTime();
    setInterval(currentTime, 1000);
}
init();