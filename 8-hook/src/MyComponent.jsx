// to use the react hooks, we need to import it!!, we don't need to import the entire library, we can just import a certain react hook by {object destructuring} to get individual property and functions
import React, {useState} from 'react'

function MyComponent(){
    // we can pass / not pass the initial state to the var through useState(initial value)
    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    let [isEmployed, setIsEmployed] = useState(false);

    // directly assigning a stateful variable with another value doesn't work, we could set the value using setX function
    const updateName = () => {
        setName("Spongebob");
    }

    // cannot use ++, but could be +1
    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedState = () => {
        setIsEmployed(!isEmployed);
    }

    

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedState}>Toggle Status</button>
        </div>
    )
}

export default MyComponent