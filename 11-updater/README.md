# Lesson 11: updater function: A function passed as an argument to setState() usually ex. setYear(year + 1) -> setYear(updater function(){}) as an argument (better practice!!) or updater arrow function should be also fine
    syntax: for a variable + 1; use arrow function but change variablename to another e.g. the capital letter v
    setState(v => v+1);
Allow for safe updates based on the ❤️ previous state. Used with multiple state updates and asychronous functions. Good practice to use updater function
当你希望基于前一个状态来更新下一个状态，基于不同的多个中间状态进行更新或者是处理异步的时候，非常适合使用updater function
因为react 习惯于 batch stateful updates together, not update immedately after the change, 所以如果我们将几次更新放一起，那么=一次更新（每一次更新更新的都是原来的stateful variable value，而updater function可以很好的解决这个问题！！）

use the updater function / arrow function would solve this problem, but we need to rename this middle var, like use the Capital letter or prevCount:
because when we rename the variable and arrow function, we treat it as prevstate, Takes the pending state to calculate the next state. 
react will puts your updater function in a queue(waiting in a line)
during the next render, it will call them in the same order
 even you just want to update it once, it is a good practice to use updater function
    eg.❌ batch state changes:
        setCount(var+1);
    e.g 👌 arrow function or updater function (based on prev pending state to update), note the pending var name = preVar should be changed, should not be the same as the var itself
        setCount(c => c + 1);

