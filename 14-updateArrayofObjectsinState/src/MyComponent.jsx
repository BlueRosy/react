import React, {useState} from 'react'

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
                  year: carYear,
                  make: carMake,
                  model: carModel
                };

        setCars(c => [...c, newCar]);
        
        setCarYear(new Date().getFullYear()
        );
        setCarMake("");
        setCarModel("");
        
    }
    
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    const carList = cars.map((car, index) => <li id={index} onClick={() => handleRemoveCar(index)}>Car {index + 1}: Year: {car.year}, Make: {car.make}, Model: {car.model} </li>);

    return (
    <div>
        <h2>List of Car Objects</h2>
        <ul>
            {carList}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make' /><br />
        <input type="text" value={carModel} onChange={handleModelChange}
        placeholder='Enter car model' /><br />
        <p>Ensuring Car Info: <br />Year: {carYear} <br />Make: {carMake} <br />Model: {carModel}</p>
        <button onClick={handleAddCar}>Add Car</button>
    </div>)
}

export default MyComponent