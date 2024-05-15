# Currency Exchange App
learning: API fetching, JSON formatting, object destructuring, custom hooks

base currency api (base currency represents a money unit, to buy the quote currency for 1 unit, how much should I spend the base currency ?): https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

1. the baseCurrency box and quoteCurrency box can use the same component, so we can create a shared component for both (reuse), we can have a index.js to 汇总所有的components by import them one by one, and export {comp1, comp2, comp3, comp4```} 
2. async function -> separate into another component , define it , useEffect run it, and export it so that we can reuse it later (`custom hooks` or functions, need to remember async function or a promise has to be defined and put inside the useEffect to control when to run the callback function. `custom Hooks` can be put into the .js file instead of .jsx file because we don't intend to return a html element 如果想要设计一个hook，需要将function 放在.js code中不是.jsx code中因为两者返回的东西不同) 
3. for option we need to have unique id which can be currency name, for label and input field (label attribute htmlFor field corresponds to input id field -> `useId()` -> a hook to generate a unique id)
4. if you have a object type {a:b, c:d}, if you want to grab the keys from the object: Object.keys(objectname);


the whole process:
design reusable components -> design fetch api function but need to handle the asych problem so need to use a promise or an async function. with useEffect, we can trigger the function whenever we want. -> object value extraction by (obj[keyname][keyname]) and keys extraction (Object.keys() method) 

the hardest part: dealing with the data fetching api (dealing with async function)