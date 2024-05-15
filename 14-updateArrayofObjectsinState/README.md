# Lesson 14: update Array of objects in state in react

1. define an array of object in state, and setter function using useState()
set the original array of object to be empty []
const [cars, setCars] = useState([]);

2. define x functions to handlepropertyChange, reflect the user updated values in the const var through setter functions

3. define function to add a new object with updated properties into the array
use setter function to add this new object into the array. reset the object properties
```
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

```

4. optional: you can remove the objects by their indexes. through.filter function. the handleremove function needs to be passed by one parameter: array index
