const mybtn1 = document.getElementById("mybtn1");
const mybtn2 = document.getElementById("mybtn2");
const divboxes = document.querySelectorAll(".divbox img");
let index=0;
let id=null;
document.addEventListener("DOMContentLoaded",initializediv);
function initializediv(){
    if(divboxes.length>0){
    divboxes[index].classList.add("displaybox");
    }
}
function showdiv(i){
    if(i>=divboxes.length){
        index=0;

    }
    else if(i<0){
        index=divboxes.length-1;
    }
    divboxes.forEach(box=>{
        box.classList.remove("displaybox");
    });
    divboxes[index].classList.add("displaybox");

}
mybtn1.onclick=function(){
    index--;
    showdiv(index);

}
mybtn2.onclick = function(){
    index++;
    showdiv(index);
}
