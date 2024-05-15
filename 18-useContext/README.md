# Lesson 18: useContext = React Hook that allows you to share values between multiple levels of components without passing props through each level 关于复用！！提供者可以传给在他内部的tag element

if passing props down to each inserted component, called prop drilling !!
very tedius.
we have a better method!! useContext hook

## Provider Component:
1. import {createContent} from 'react';
2. export const MyContext = createContent();
3. <MyContext.Provider value={value}>
        <Child />
    </MyContext.Provider>


## COMSUMER COMPONENTS
1. import React, {useContext} from 'react';
2. import {MyContext} from './ComponentA';
3. const value = useContext(MyContext);

Good points: any elements that are the child component of provider component, can access this provided context
