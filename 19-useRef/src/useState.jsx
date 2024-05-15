import React, {useState, useEffect, useRef} from "react";

function UseState() {
    // useState re-render when state variable changes -> useEffect execute function every time when the component re-render!! 
    let [number, setNumber] = useState(0);

    // every time when the component re-render, it will console log the sentense
    useEffect(()=>console.log(`Component Re-rendered`));

    function handleClick() {
        setNumber(n => n+1);
    }
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}

export default UseState