import React, {useState, useEffect, useRef} from "react";

function StopWatch() {
    let startTime = useRef(0);
    let elapsedTime = useRef(0);
    let resultDisplay = useRef(`00:00:00`);
    let startId = null;
    
    // useEffect(() => {
    //     startId = setInterval(display, 10); 

    //     return () => clearInterval(startId);
    // }, [startTime]);


    function start() {
        if (!startId) {
            startTime.current = Date.now() - elapsedTime.current;
            console.log(startTime.current);
       
            startId = setInterval(display, 10);
        }
        
    }

    function stop() {
        clearInterval(startId);
        startId = null;
    }

    function reset() {
        const result = document.getElementById(`clockResult`);

        if (!startId){
            startTime.current = 0;
            elapsedTime.current = 0;
            resultDisplay.current = `00:00:00`;
            startId = null;
        }

        else {
            startTime.current = Date.now();
            
        }

        result.textContent = "00:00:00";
    }

    function display(){
        elapsedTime.current = Date.now() - startTime.current;
        console.log(elapsedTime);
        
        // const hours = Math.floor(elapsedTime.current / (1000 * 60 * 60));
        // const minutes = Math.floor(elapsedTime.current / (1000 * 60) % 60);
        // const seconds = Math.floor(elapsedTime.current / 1000 % 60);

        // if we just combie the hour and min together -> conver the hour to the min
        const minutes = Math.floor(elapsedTime.current / (1000 * 60));
        const seconds = Math.floor(elapsedTime.current / 1000 % 60);
        const ms = Math.floor(elapsedTime.current % 1000 / 10);
        resultDisplay.current = `${timeFormat(minutes)}:${timeFormat(seconds)}:${timeFormat(ms)}`;

        const result = document.getElementById(`clockResult`);
        console.log(resultDisplay.current);
        result.textContent = resultDisplay.current;
          
    }

    function timeFormat(number) {
        return number.toString().padStart(2, 0);
    }

    return (
    <div className="watch-container">
        <h2 id="clockResult">{resultDisplay.current}</h2>
        <div className="buttons">
            <button className="green" onClick={start}>Start</button>
            <button className="red" onClick={stop}>Stop</button>
            <button className="blue" onClick={reset}>Reset</button>
        </div>
    </div>
    );
}

export default StopWatch