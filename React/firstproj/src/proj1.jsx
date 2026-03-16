import React,{useState} from 'react'
function proj1(){
    const [color,setcolor]=useState("#ff00ff");
    function colorset(event){
        setcolor(event.target.value);
    }
    return(
        <div>
            <h1>Color Picker</h1>
            <div className='colorpicker' style={{backgroundColor:color}}>
                 <p>selected color: {color}</p>
            </div>
            <label>
                Select a color:
                <input type="color" value={color} onChange={colorset}/>
            </label>
        </div>
    )
}
export default proj1