import React , {useState} from 'react';

function ColorPicker(){
    const [color , setColor] = useState('grey');


    function handleColorPicker(event){
        setColor(event.target.value)
    }


return(
    <div className='colorPickerMain'>
        <h1 style={{color:color}}>Color Picker</h1>
        <div className='colorPickerDiv' style={{backgroundColor:color}}>
            <p> Selected Code : {color} </p>
        </div>
        <label>Select a Color: {color} </label>
        <input type="color" value={color} onChange={handleColorPicker} />
    </div>
);

}

export default ColorPicker 