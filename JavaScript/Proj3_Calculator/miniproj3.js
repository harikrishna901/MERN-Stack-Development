const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
const btn7=document.getElementById("btn7");
const btn8=document.getElementById("btn8");
const btn9=document.getElementById("btn9");
const btn0=document.getElementById("btn0");
const btns1=document.getElementById("btn+");
const btns2=document.getElementById("btn-");
const btns3=document.getElementById("btn*");
const btns4=document.getElementById("btn/");
const btns5=document.getElementById("btn.");
const btns6=document.getElementById("btn=");
const btnc=document.getElementById("btnc");
const result =document.getElementById("innerbox1");
let displaystring="";
btn1.onclick=function(){
    displaystring+="1";
    result.textContent=displaystring;
}
btn2.onclick=function(){
    displaystring+="2";
    result.textContent=displaystring;
}
btn3.onclick=function(){
    displaystring+="3";
    result.textContent=displaystring;
}
btn4.onclick=function(){
    displaystring+="4";
    result.textContent=displaystring;
}
btn5.onclick=function(){
    displaystring+="5";
    result.textContent=displaystring;
}
btn6.onclick=function(){
    displaystring+="6";
    result.textContent=displaystring;
}
btn7.onclick=function(){
    displaystring+="7";
    result.textContent=displaystring;
}
btn8.onclick=function(){
    displaystring+="8";
    result.textContent=displaystring;
}
btn9.onclick=function(){
    displaystring+="9";
    result.textContent=displaystring;
}
btn0.onclick=function(){
    displaystring+="0";
    result.textContent=displaystring;
}
btns1.onclick=function(){
    displaystring+="+";
    result.textContent=displaystring;
}
btns2.onclick=function(){
    displaystring+="-";
    result.textContent=displaystring;
}
btns3.onclick=function(){
    displaystring+="*";
    result.textContent=displaystring;
}
btns4.onclick=function(){
    displaystring+="/";
    result.textContent=displaystring;
}
btns5.onclick=function(){
    displaystring+=".";
    result.textContent=displaystring;
}
btns6.onclick=function(){
     try{
    result.textContent=eval(displaystring);
    }
    catch(error){
        result.textContent="error";
    }
    finally{
        displaystring="";
    }

}
btnc.onclick=function(){
    let a =0;
    displaystring="";
    result.textContent=`${a.toFixed(2)}`;
}