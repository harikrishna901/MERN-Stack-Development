import React , {useState,useEffect} from 'react'
function proj2(){
    const [hours,sethours] = useState(0);
    const [minutes,setminutes] = useState(0);
    const [seconds,setseconds] = useState(0);
    const [mr,setmr] = useState("AM");
    useEffect(()=>{
       const timer=setInterval(()=>{
        const date = new Date();
        setseconds(c=> (date.getSeconds()).toString().padStart(2,0)); 
        sethours(c=>(date.getHours()% 12).toString().padStart(2,0) );
        setminutes(c=> date.getMinutes().toString().padStart(2,0));  
        setmr((date.getHours() >=12 ) ? "PM" : "AM")

    },1000);
    return ()=>{
        clearInterval(timer);
    }
    },[minutes,hours,seconds])
    return(
        <div className='digitalclockapp'>
            <h1>{hours}:{minutes}:{seconds}:{mr}</h1>
        </div>
    );

}
export default proj2