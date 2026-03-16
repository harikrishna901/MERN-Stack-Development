array=["red","orange","yellow","green","blue","indigo","violet"];
document.getElementById("mybtn1").addEventListener("click",event=>{
    document.body.style.backgroundColor="red";
})
document.getElementById("mybtn2").addEventListener("click",event=>{
    document.body.style.backgroundColor="green";
})
document.getElementById("mybtn3").addEventListener("click",event=>{
    document.body.style.backgroundColor="blue";
})
document.getElementById("mybtn4").addEventListener("click",event=>{
    let ram = Math.floor(Math.random()*array.length);
    document.body.style.backgroundColor=`${array[ram]}`;
})
