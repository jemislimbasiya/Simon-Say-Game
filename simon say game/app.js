let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns = ["red", "green", "purple", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
    }
    levelup();
})

function gameFlash(btn) {
    btn.classList.add("gameflash")
    setTimeout(function() {
        btn.classList.remove("gameflash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx]
    let ranBtn = document.querySelector(`.${ranColor}`)
    gameSeq.push(ranColor)
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"
        }, 250);
        latScore();
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




















