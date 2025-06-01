let usercolor=[];
let gamecolour=[];
let btns=["yellow","red","green","purple"];
let gamestarted=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(gamestarted==false){
        gamestarted=true;
        console.log("game started");
    }
    levelUP();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },200);
}
function levelUP(){
    usercolor=[];
    level++;
    h2.innerText= `your level is ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gamecolour.push(randomcolor);
    console.log(gamecolour);
    btnflash(randombtn);
}

function checkans(index){
    if(usercolor[index]==gamecolour[index]){
        if(usercolor.length==gamecolour.length){
          setTimeout(levelUP,1000);
        }
        console.log("ran");
    }else{
          h2.innerHTML= `<b>game over! your current Score is: ${level} <br><br>press any key to restart</b>`;
         reset();
         document.body.classList.add("game-over");
         setTimeout(() => document.body.classList.remove("game-over"), 300);
    }
}

function buttonpress(){
    let btn=this;
    let uscolor=btn.getAttribute("id");
    usercolor.push(uscolor);
    btnflash(btn);
    let idx=usercolor.length-1;
    checkans(idx);
}

let allbtns=document.querySelectorAll(".clickbtn");
for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
}


function reset(){
    gamestarted=false;
    gamecolour=[];
    usercolor=[];
    level= 0;
}
