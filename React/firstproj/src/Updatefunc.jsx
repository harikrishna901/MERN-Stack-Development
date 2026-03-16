import React ,{useState} from 'react';
function Updatefunc(props){
    const items = props.vegitems;
    const [vegs,Setvegs]=useState(items);
    function addvegs(event){
        const newvegs = document.getElementById("vegitem").value;
        Setvegs(()=>[...vegs,newvegs]);
        document.getElementById("vegitem").value="";
    }
    function removevegs(index){
        Setvegs(()=>vegs.filter((element,i)=> i!==index));
    }
    return(
        <div>
            <h1>Vegetables</h1>
            <ul>
                {vegs.map((element,index) => <li key={index} onClick={()=>removevegs(index)}>{element}</li>)}

            </ul>
            <input type="text" placeholder='enter vegetable' id="vegitem"/>
            <button onClick={addvegs}>Add</button>
        </div>
    )

}
export default Updatefunc