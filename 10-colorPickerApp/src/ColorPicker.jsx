import React, {useState} from 'react'

function ColorPicker(){

    const [color, setColor] = useState("#82D0F2");

    function handleColorChange(event){
        setColor(event.target.value);
        colorSelectDisplay.style.backgroundColor = color;
    }

    // learning: style{{cssproperty:variable}}
    return (
    <>
        <h2>Color Picker</h2>
        <div className="colorSelectDisplay" style={{backgroundColor: color}}>Selected Color:<br/>
        {color}
        </div>
        <p>Select a Color:</p>
        <input type="color" value={color} onChange={handleColorChange} />
    </>)
}

export default ColorPicker