// event listeners///////////////////
//const box = document.getElementById("box");
//const btn = document.getElementById("mybtn");
//btn.addEventListener("mouseover",event =>{
    //box.textContent="byee";
  //  box.style.backgroundColor="blue";
//});
//btn.addEventListener("mouseout",event =>{
    //box.textContent="hello";
  //  box.style.backgroundColor="aqua";
//});
//btn.addEventListener("click",event =>{
  //  box.textContent="";
    //box.style.backgroundColor="red";
//});
const box = document.getElementById("box");
const distance = 10;
let x=0;
let y=0;
document.addEventListener("keydown",event =>{
    box.textContent="vyee";
    box.style.backgroundColor="red";
}
);
document.addEventListener("keyup",event =>{
    box.textContent="hello";
    box.style.backgroundColor="aqua";
})
document.addEventListener("keydown",event =>{
    console.log(event.key);
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=distance;
                break;
            case "ArrowDown":
                y+=distance;
                break;
            case "ArrowLeft":
                x-=distance;
                break;
            case "ArrowRight":
                x+=distance;
                break;
        }
        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
    }

});
