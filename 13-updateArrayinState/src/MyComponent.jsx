import React, {useState} from 'react'
function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    

    function handleAddFood(event){

        // wrong point 1: must be inside the function to define foodInput, otherwise because DOM and element doesn't return and built in the react yet, we cannot find this foodInput element in the react DOM
        const newfood = document.getElementById(`foodInput`).value;

        // next ,react the input box
        document.getElementById(`foodInput`).value = "";
        

        // input element , if we want to get its user input value, we have to use ELEMENT.value, rather than textContent!!
        // finally, we cannot use foods.push(newfood). because this is the build in function not a final value
        setFoods(f => [...f, newfood])
    }


    // define for when clicking the li tag item, the item will be removed.!! and because this function has an index para, we need to onClick={arrow function rather than the functionname directly}
    function handleRemoveFood(index) {

        // to get an array index, we can use (element , i), element doesn't be used, we can igore it by using _ underscore (just ignore it)
        setFoods(f => f.filter((_, i) => i != index))
    }


    return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map(
                (food, index) => 
                <li key={index} onClick={()=> handleRemoveFood(index)}>{food}</li>
        )}
        </ul>
        <input type="text" id="foodInput" placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>)
}

export default MyComponent