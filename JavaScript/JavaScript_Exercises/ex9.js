const img = document.getElementById("image");
const btn = document.getElementById("mybtn");
const btn1 = document.getElementById("mybtn1");
btn.addEventListener("click",event =>{
    if(img.style.visibility!="hidden"){
        img.style.visibility="hidden";
        btn.textContent="show";
    }
    else{
        img.style.visibility="visible";
        btn.textContent="Hide";
    }
});