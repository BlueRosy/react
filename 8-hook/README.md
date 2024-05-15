# Lesson 8: react Hook
react hook = special function that allows functional components to use React features without writing class components (React v16.8) (如果function name starts with a use, 非常可能是react hook: useState, useEffect, useContext, useReducer, useCallback, and more)

useState() = A react hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM 若是一个状态性的变量，变量值会被储存在虚拟DOM树中 [name, setName]
修改a stateful variable 只能通过setName function 了. 有了它，就可以对一个变量进行修改同时他们保存修改后的值了

that means we no longer need to write a class component, we just need to use functional based components that use hooks to use react fetures


final work: counter program