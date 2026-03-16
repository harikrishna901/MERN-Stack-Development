const daysdisplay=document.getElementById("daysdisplay");
const hoursdisplay=document.getElementById("hoursdisplay");
const minutesdisplay=document.getElementById("minutesdisplay");
const secondsdisplay=document.getElementById("secondsdisplay");
const days = document.getElementById("days");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const hours = document.getElementById("hours");
let id=null;
let infodays=1//Number(window.prompt("enter no of days: "));
let infohours=0//Number(window.prompt("enter no of hours:"));
let infominutes=0//Number(window.prompt("enter no of minutes: "))
let infoseconds =45 //Number(window.prompt("enter no of seconds:"));
if(infodays< 0 || Number.isNaN(infodays)){
    window.alert("enter valid input days");
}
else{
    if(infohours<0 || Number.isNaN(infohours) || infohours>23){
        window.alert("enter valid input hour ");
    }
    else{
        if(infominutes<0 || Number.isNaN(infominutes) ||infominutes>59){
            window.alert("enter valid input days");
        }
        else{
            if(infoseconds<0 || Number.isNaN(infoseconds) || infoseconds>59){
                window.alert("enter valid input seconds");
            }
            else{

                 id =setInterval(()=>{
                    if(infoseconds ===0 && infodays===0 && infominutes===0 && infohours===0){
                        launched();
                        console.log("finished");
                        return;
                    }
        
                    if(infoseconds<0){
                        infoseconds=59;
                        infominutes--;
                        if(infominutes<0){
                            infominutes=59;
                            infohours--;
                        }
                        if(infohours<0){
                            infohours=23;
                            infodays--;
                        }
                    }
                    secondsdisplay.textContent=infoseconds.toString().padStart(2,"0");
                    daysdisplay.textContent=`${infodays.toString().padStart(2,"0")}:`;
                    hoursdisplay.textContent=`${infohours.toString().padStart(2,"0")}:`;
                    minutesdisplay.textContent=`${infominutes.toString().padStart(2,"0")}:`;
                    infoseconds--;
                },1000);
            }

        }

    }
}
function launched(){
    document.getElementById("time").style.display="none";
    document.getElementById("timeword").style.display="none";
    document.getElementById("time").innerHTML="";
    const launch = document.createElement("h1");
    launch.textContent="🚀 LAUNCHED...."
    document.body.appendChild(launch);
    clearInterval(id);
    return;
    }
