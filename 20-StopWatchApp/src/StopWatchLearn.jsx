import React, {useState, useEffect, useRef} from "react";

function StopWatchLearn() {
    
    // track whether the stopwatch is running? 
    const [isRunning, setIsRunning] = useState(false);

    // update frequently
    const [elapsedTime, setElapsedTime] = useState(0);

    // just set one time, not update later one
    const intervalIdRef = useRef(null);

    const startTimeRef = useRef(0);

    // when mounted at the beginning and when isRunning is changing. then trigger the function. inside the useEffect function to define if start running (click the start button), then per 10ms, update the elapsedTime!
    useEffect(() => {
        if (isRunning){
            intervalIdRef.current = setInterval(() =>
            {
                setElapsedTime(Date.now() - startTimeRef.current);

            }, 10);
        }

        // if the component unmounted or if the isRunning is changed, then do this.
        // if intervalIdRef has one, clear it . if not, clear it does not have an effect
        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        // Date.now() will give us ms since epoch! it is the time interval
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);

    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
        startTimeRef.current = 0;

    }

    function format(){

        const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
        const minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
        const seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
        const ms = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

        return `${hours}:${minutes}:${seconds}:${ms}`;
    }

    
    // if recall a function, then it will be automatically running this function and return the latest result. else if we return a value, it will be updated only once!!
    return (
    <div className="watch-container">
        <h2 id="clockResult" className="fourNumberDisplay">{format()}</h2>
        <div className="buttons">
            <button className="red" onClick={start}>Start</button>
            <button className="green" onClick={stop}>Stop</button>
            <button className="blue" onClick={reset}>Reset</button>
        </div>
    </div>
    );
}

export default StopWatchLearn