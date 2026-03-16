const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultdisplay = document.getElementById("result");
const ps = document.getElementById("ps");
const cs = document.getElementById("cs");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let compvalue;
let p=0;
let c=0;
img1.addEventListener("click",event =>{
    compvalue=Math.floor((Math.random()*3)+1);
    if(compvalue===1){
        player.textContent=`PLAYER: Rock`;
        computer.textContent=`Computer: Rock`;
        resultdisplay.textContent = "IT'S A TIE!";
    }
    else if(compvalue===2){
         player.textContent=`PLAYER: Rock`;
        computer.textContent=`Computer: Paper`;
        resultdisplay.textContent = "YOU LOSE!!";
         c+=1;
         cs.textContent=`Computer Score: ${c}`;
        
    }
    else{
        player.textContent=`PLAYER: Rock`;
        computer.textContent=`Computer: Scissor`;
        resultdisplay.textContent = "YOU WIN!";
         p+=1;
         ps.textContent=`Player Score: ${p}`;
    }

});
img2.addEventListener("click",event =>{
    compvalue=Math.floor((Math.random()*3)+1);
    if(compvalue===1){
        player.textContent=`PLAYER: Paper`;
        computer.textContent=`Computer: Rock`;
        resultdisplay.textContent = "YOU WIN!";
        p+=1;
        ps.textContent=`Player Score: ${p}`;
    }
    else if(compvalue===2){
         player.textContent=`PLAYER: Paper`;
        computer.textContent=`Computer: Paper`;
        resultdisplay.textContent = "IT'S A TIE!";
        
    }
    else{
        player.textContent=`PLAYER: Paper`;
        computer.textContent=`Computer: Scissor`;
        resultdisplay.textContent = "YOU LOSE!!";
        c+=1;
        cs.textContent=`Computer Score: ${c}`;
        
    }


});
img3.addEventListener("click",event =>{
    compvalue=Math.floor((Math.random()*3)+1);
    if(compvalue===1){
        player.textContent=`PLAYER: Scissor`;
        computer.textContent=`Computer: Rock`;
        resultdisplay.textContent = "YOU LOSE!!";
        c+=1;
        cs.textContent=`Computer Score: ${c}`;
        
    }
    else if(compvalue===2){
         player.textContent=`PLAYER: Scissor`;
        computer.textContent=`Computer: Paper`;
        resultdisplay.textContent = "YOU WIN!";
        p+=1;
        ps.textContent=`Player Score: ${p}`;
        
    }
    else{
        player.textContent=`PLAYER: Scissor`;
        computer.textContent=`Computer: Scissor`;
        resultdisplay.textContent = "IT'S A TIE!";
    }


});
switch(resultdisplay.textContent){
    case "YOU WIN!":
        result.classList.add("greentext");
        break;
    case "YOU LOSE!!":
        result.classList.add("redtext");
        break;
    case "IT'S A TIE!":
        result.classList.add("blacktext");
        break;
}
