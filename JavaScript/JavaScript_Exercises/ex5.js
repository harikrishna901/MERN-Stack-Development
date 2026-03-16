const set = document.getElementById("set");
const clear = document.getElementById("clear");
let id;
set.onclick= function(){
                id = setTimeout(function(){
                console.log("started");
                    },4000)
                }
clear.onclick=function(){
    clearTimeout(id);
    console.log("ended");
    
}