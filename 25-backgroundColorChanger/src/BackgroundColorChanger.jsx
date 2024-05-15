import React, {useState} from 'react'

function BackgroundColorChanger() {

    const [bgColor, setbgColor] = useState("#000000");

    function setRedbg(){
        setbgColor("#FF5D5D");
    }

    function setGreenbg(){
        setbgColor("#7ABA78");
    }

    function setBluebg(){
        setbgColor("#A0DEFF");
    }

  return (
    <div className='colorBox duration-200' style={{backgroundColor:bgColor}}>
        <div className='buttons'>
            <button className='bg-red-300 hover:bg-red-400 transition-colors' onClick={setRedbg}>red</button>
            <button className='bg-green-300 hover:bg-green-400' onClick={setGreenbg}>green</button>
            <button className='bg-blue-300 hover:bg-blue-400' onClick={setBluebg}>blue</button>
        </div>
    </div>
  )
}

export default BackgroundColorChanger