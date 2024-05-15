# Class 7: click event = An interaction when a user clicks on a specific element. we can respond to clicks by passing a callback to the onClick event handler.

1. in .jsx file, `<tag>` property name should be camel case , so` <button  onClick={() => functionname(params)}> `, rather than onclick !!

Note 2 points:

    1.onClick
    2.passing arguments to the function, must follow the syntax onClick={() => funcname(params)}, must not directly use onClick = funcname(params) because the latter will trigger the function directly without clicking the button
    simply put: if you don't have any parameters, you can just pass the onClick={funcname}, but if the function has a parameter, then pass onClick={() => funcname(params)}) , that is you will need an arrow function or anonymous function)

2. we can design this onclick function with conditional rendering based on the passing params

3. we can use event (`onClick is the event`) as our arguments and passed it to our function
 - const handleClick = (event) => console.log(event);
 - return `<button onClick={(e) => handleClick(e)}>Click me 😁</button>`
 - `event.target` describe the button being clicked
 - there is also onDoubleClick event
 - `event.target.textContent`, `event.target.style.display` 