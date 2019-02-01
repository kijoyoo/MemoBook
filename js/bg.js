const body = document.querySelector("body");

const random = 4;

function selectImg(number){
    const bgImg1 = new Image();
    const bgImg2 = new Image();
    bgImg1.src = `images/img1/${number + 1}.jpg`;
    bgImg2.src = `images/img2/${number + 5}.jpg`;
    bgImg1.classList.add("left-img");
    bgImg2.classList.add("right-img");
    body.appendChild(bgImg1);
    body.appendChild(bgImg2);

}

function randomNumber(){
    const randomNumber = Math.floor(Math.random()*random);
    selectImg(randomNumber);
}

function init(){
    randomNumber();
}
init();