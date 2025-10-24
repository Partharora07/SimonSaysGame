let btns = ['yellow','red','blue','green'];
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
// to start the game 
document.addEventListener('keypress',function(){
    if(started==false){//if game was not started then only this will start
        console.log("Game started");
        started = true;
        levelup();
    }
});
//code to flash the button
//flashed by game
function btnflash(btn){//passsing the randBtn throught this function
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
//userflash btn
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}
function levelup(){
    userSeq = [];//taki starting se dubara user add kre sare colour
    level++;
    h2.innerText = `Level: ${level}`;
    //code to generate random button
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnflash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){//we check last color of both sequences
        if(userSeq.length == gameSeq.length){//if user entered equal no. of colors
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! <b>Your Score was ${level}</b> </br>Press any key to start again.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },150);
        reset();
    }
}
//flash the button which is clicked
function btnPress(){
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}
//to select all buttons and apply click event on each button using for loop
let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);//then  passing the clicked button to btnpress
}
// to reset the game
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


