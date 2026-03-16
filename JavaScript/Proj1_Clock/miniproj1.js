const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
const span5 = document.getElementById("span5");
const date  = new Date();
function clock(){
    const date = new Date();
    let hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const milli = date.getMilliseconds();
    const mer = (hour>=12) ? "PM" : "AM";
    //hour = hour%12 || 12;
    span1.textContent=hour.toString().padStart(2,0);
    span2.textContent=min.toString().padStart(2,0);
    span3.textContent=sec.toString().padStart(2,0);
    span4.textContent=milli
    span5.textContent=mer
}
clock();
setInterval(clock,1000);