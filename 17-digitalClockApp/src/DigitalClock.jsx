import React, {useState, useEffect} from 'react'

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        // why set 1000ms? because 1000ms = 1s, we just need to update every 1s, that would be great
        const intervalId = setInterval(() => setTime(new Date()), 1000);

        // add a cleanup function, if this component unmounted, this intervalId would be cleared so we could free any resource
        return () => clearInterval(intervalId);
    }, []);

    // learning2: we can pass timeFormat function inot html element. we can declare and then return sth within the function!!
    function timeFormat() {
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hour >= 12? "PM" : "AM";

        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    // to format the number to 2 unit string
    function padZero(number){
        return number.toString().padStart(2, 0);
    }
    
    return (
        <h1 className="clockDisplay">
            {timeFormat()}
        </h1>
    )
}

export default DigitalClock