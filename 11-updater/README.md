# Lesson 11: updater function: A function passed as an argument to setState() usually ex. setYear(year + 1) -> setYear(updater function(){}) as an argument (better practice!!) or updater arrow function should be also fine

```
syntax: for a variable + 1; 
use arrow function but change variablename to another 
e.g. the capital letter v

setState(v => v+1);
```
Allow for safe updates based on the ❤️ previous state. Used with multiple state updates and asychronous functions. Good practice to use updater function

`reason: react algorithm: make batching stateful updates, rather than update every update immedately after the change`, so if we put several updates together, then react will act as update from the original state everytime. to solve the problem. `use updater function, which allows us to temporally save the  middle state, and update the value based on the middle state every time`

use the updater function / arrow function would solve this problem, but we need to `rename this middle var`, like use the Capital letter or prevCount:
`because when we rename the variable and arrow function, we treat it as prevstate, Takes the pending state to calculate the next state.` 
react will puts your updater function in a queue(waiting in a line)
during the next render, it will call them in the same order
 even you just want to update it once, it is a good practice to use updater function
    eg.❌ batch state changes:
        setCount(var+1);
    e.g 👌 arrow function or updater function (based on prev pending state to update), note the pending var name = preVar should be changed, should not be the same as the var itself
        `setCount(c => c + 1);`

