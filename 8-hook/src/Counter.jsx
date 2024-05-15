// to create a counter program, counter program will require a stateful varaible to store the state of number displayed on the screen

import React, {useState} from 'react'

function Counter() {
    
    // to save a stateful display number
    let [display, setDisplay] = useState(0);

    const addNumber = () => {
        setDisplay(display + 1);
    }
    
    const subNumber = () => {
        setDisplay(display - 1);
    }

    const resetNumber = () => {
        setDisplay(0);
    }
    
    return (
        <div className="counter">
            <h1 className="numberDisplay">{display}</h1>
            <div className="buttonBox">
                <button onClick={addNumber}>+</button>
                <button onClick={subNumber}>-</button>
                <button onClick={resetNumber}>reset</button>
            </div>
        </div>
    )
}

export default Counter