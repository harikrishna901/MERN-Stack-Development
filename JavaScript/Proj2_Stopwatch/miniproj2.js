const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
const btn1 = document.getElementById("startbtn");
const btn2 = document.getElementById("stopbtn");
const btn3 = document.getElementById("resetbtn");
let hrs=0;
let mins=0;
let secs=0;
let millisec=0;
let timeid;
btn1.onclick = function(){
        timeid= setInterval(function(){
                if(secs<59){
                secs++;
                span3.textContent=`${secs.toString().padStart(2,0)}:`;
                }
                else{
                    secs=0;
                    span3.textContent=`${secs.toString().padStart(2,0)}:`;
                }

                if(secs===0){
                    mins++;
                    span2.textContent=`${mins.toString().padStart(2,0)}:`;
                }
                if(mins===59){
                    hrs++;
                    mins=0;
                    span1.textContent=`${hrs.toString().padStart(2,0)}:`;

                }
                if(hrs===23){
                    hrs=0;
                    span1.textContent=`${hrs.toString().padStart(2,0)}:`;
                } 
        },1000);
        mid = setInterval(function(){
                    if(millisec<=99){
                        span4.textContent=`${millisec.toString().padStart(2,0)}`;
                        millisec++;
                    }
                    else{
                        millisec=0;
                        span4.textContent=`${millisec.toString().padStart(2,0)}`;
                    }

                },10);
}
btn2.onclick = function(){
    clearInterval(mid);
    clearInterval(timeid);

}
btn3.onclick = function(){
    clearInterval(timeid);
    clearInterval(mid);
    hrs=millisec=mins=secs=0;
    span1.textContent=`${hrs.toString().padStart(2,0)}:`;
    span2.textContent=`${mins.toString().padStart(2,0)}:`;
    span3.textContent=`${secs.toString().padStart(2,0)}:`;
    span4.textContent=`${millisec.toString().padStart(2,0)}`;

}