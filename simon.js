let gameseq=[];
let userseq=[];

let btns=["red","yellow" ,"blue" ,"green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("gamestrated");
        started=true;
        levelup();   
    }

    
});


function gameflash(btn){

    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash");
    },300);
}

function userflash(btn){

    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level-${level}`;


    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);

    gameflash(randbtn);

}

function checkans(idx){

   

    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
              setTimeout(levelup,1000);
       }
      
    }else {
        h2.innerHTML=`game over !<br>your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";

        },500);

        reset();
    }
}



function btnpress(){
   let btn=this;
   userflash(btn);

   let usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checkans(userseq.length-1);

}


let allbtns=document.querySelectorAll(".btn")

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}

