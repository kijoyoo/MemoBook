const dDay = document.querySelector(".d-day");


function randomDate(){
    var now = new Date();
    const metDay = new Date("january 26, 2017");
    var day = now.getTime() - metDay.getTime();
    var dd = Math.floor(day/24/60/60/1000);
    dDay.innerText = `:: ${dd} 일쨰`;
    console.log(day);
}

function init(){
    randomDate();
}
init()