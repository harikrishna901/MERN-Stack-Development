import React , {useState,useEffect,useRef} from 'react'
function hooks(){
    /*
    let [width , setwidth] = useState(window.innerWidth);
    let [height , setheight] = useState(window.innerHeight);
    useEffect(()=>{
        document.title=`width:${width} px height:${height} px`;
        window.addEventListener("resize",handlesize);
        return function(){
            window.removeEventListener("resize",handlesize);
        }
    },[width,height]);
    function handlesize(){
        setheight(window.innerHeight);
        setwidth(window.innerWidth);
    }
    */
   /*const refcount = useRef(0);
   useEffect(()=>{
    console.log("rendered");
   });
   function handclick(){
    refcount.current++;
    console.log(refcount.current);
   }
    */
   let [value , setvalue] = useState(0);
   const refcount = useRef(0);
   useEffect(()=>{
    refcount.current++;
   })
   function handclickin(){
    setvalue(c=>c+1);
   }
   function handclickdec(){
    setvalue(c=>c-1);
   }


    return(
        <div>
            <button onClick={handclickin}>Increase</button>
            <button onClick={handclickdec}>Decrease</button>
            <p>Count:{value}</p>
            <p>refcount:{refcount.current}</p>
        </div>
    );


}
export default hooks