# Class 7: click event = An interaction when a user clicks on a specific element. we can respond to clicks by passing a callback to the onClick event handler.

1. in .jsx file, <tag> property name should be camelcase , so <button  onClick={() => functionname(params)}> , rather than onclick !!
注意两点：
1.onClick
2.passing arguments to the function, 我们需要onClick={() => funcname(params)}, 决计不能直接onClick = funcname(params) 若是这样会造成不需要click，程序自动启动
(if you don't have any parameters, you can just pass the onClick={funcname}, but if the function has a parameter, then pass onClick={() => funcname(params)}) , that is you will need an arrow function or anonymous function)

2. we can design this onclick function with conditional rendering based on the passing params

3. we can use event (onClick is the event) as our arguments and passed it to our function
 - const handleClick = (event) => console.log(event);
 - return <button onClick={(e) => handleClick(e)}>Click me 😁</button>
 - there is also onDoubleClick:表示双击点击才会产生行动
 - event.target.textContent, event.target.style.display ``` 都是可以改变的属性哦