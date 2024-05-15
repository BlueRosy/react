import React, {useState} from 'react'

function MyComponent() {

    // create a car object: 3 properties
    const [car, setCar] = useState({   
        year:2024, 
        make:"Ford", 
        model: "Mustange"});

    // funtion to change the object state
    // to change the current object property, we have to ...car (spread operator) because it will save all prev properties in the {}, next, we need to add the new updated one, when there are two properties with the same name, the object will only save the latter one
    
    function handleYearChange(event){
        // this is not an updater function
        // setCar({...car, year:event.target.value});

        // an updater function / arrow function would be like, our {} object should be inside the ()
        setCar(c => ({...c, year:event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make:event.target.value}))
    }

    function handleModelChange(event){
        setCar(c => ({...c, model:event.target.value}))
    }
    

    return (
    <div>
        <p>Your favorite car is: {car.year}, {car.make}, {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange} /><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
    </div>)
}

export default MyComponent