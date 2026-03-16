//array of objects
import React ,{useState} from 'react';
function Updatefunc2(){
    const [car,setcar]=useState([]);
    const [carname,setname]=useState("");
    const [caryear,setyear]=useState(new Date().getFullYear());
    const [carmodel,setcarmodel]=useState("");
    function addnewcar(){
        const addcar={
            name:carname,
            year:caryear,
            model:carmodel
        };
        setcar(()=> [...car,addcar]);
        setyear(new Date().getFullYear());
        setname("");
        setcarmodel("");
    }
    function handlename(event){
        setname(event.target.value);
    }
    function handleyear(event){
        setyear(event.target.value);
    }
    function handlemodel(event){
        setcarmodel(event.target.value);
    }
    function removecar(index){
        setcar(car.filter((e,i)=>i!==index));
    }
    return(
        <div>
            <h1>Cars Details</h1>
            <ul>
                {car.map((e,index)=>
                <li key={index} onClick={()=>removecar(index)}>{e.name} {e.year} {e.model}</li>)}
            </ul>
            <input type="text" placeholder='enter car name' onChange={handlename} value={carname}/><br/>
            <input type="number" placeholder='enter year' onChange={handleyear} value={caryear}/><br/>
            <input type="text" placeholder='enter model name' onChange={handlemodel} value={carmodel}/><br/>
            <button onClick={addnewcar}>Add</button>

        </div>
    )
    

}
export default Updatefunc2