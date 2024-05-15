import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const subNumber = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const resetNumber = () => {
        setCount(0);
    }

    const addNumber = () => {
        // if we want to increment the count by 3 times. if we use the code setCount(count + 1); setCount(count + 1); setCount(count + 1); for three times. it doesn't work. it just be treated like once. because the setCount(count + 1) uses the current state count to calculate the Next state. set function doesn't trigger an update. React batches together state updates for performance reasons. （react将会将所有的状态更新绑在一起分批次更新，为了提升表现），所以NEXT state becomes the CURRENT state after an update.
        /*
         e.g. we assume that 
         setCount(count + 1);
         update for once
         setCount(count + 1);
         update for twice
         setCount(count + 1);
         update for third

         but the above not the case. the truth is 
         assuming count = 0 orginially
         setCount(count + 1); count would be 1
         setCount(count + 1);
         count would be 1 = 0+1(count not update)
         setCount(count + 1);
         count would be 1 = 0+1(count still not update)

         use the updater function / arrow function would solve this problem, but we need to rename this middle var, like use the Capital letter or prevCount:
         when we rename the variable and arrow function, we treat it as prevstate, Takes the pending state to calculate the next state. 
         react will puts your updater function in a queue(waiting in a line)
         during the next render, it will call them in the same order

         even you just want to update it once, it is a good practice to use updater function
        */
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <div className="counterBox">
            <h2 >{count}</h2>
            <div className="buttonBox">
                <button onClick={subNumber}>-</button>
                <button onClick={resetNumber}>c</button>
                <button onClick={addNumber}>+</button>
            </div>
        </div>
    )
}

export default Counter