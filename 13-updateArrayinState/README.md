# Lesson 13: update array in State in react
1. define an array in State using useState(), note: we can set the default []
    e.g.
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])


2. addFood item
this function , we cannot use build-in array.push , it will directly update the array without return a new array, but our setFood(new food array), so to do this:
    const newfood = document.getElementById(`foodInput`).value;
    
    setFoods(f => [...f, newfood])

3. removefood item
this function, we need a parameter item index. so
1. we need to pass tag element eg. <li key={index} onClick={()=> handleRemoveFood(index)}>
2. we use updater function: array.filter() method will create a new array
with some conditions
we can just filter the one we don't want with its index
e.g.
    setFoods(f => f.filter((_, i) => i != index))