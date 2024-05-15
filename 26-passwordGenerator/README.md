# Project 2: Password Generator project
key points: 
1. useState to re-render the page and update the password. 
2. different buttons will trigger a function to decide the optional char candidate inside the password
3. copy button will trigger the textCopy function: onClick={copyText}, we will utilize the window.navigator.clipboard.writeText() function to copy the text into the clipboard. and use element.select() to select the text inside the inputbox
4. useEffect, useCallback, useRef
    notice that in this program, I just use the useEffect function, 不知道为何如果使用了useCallback + useEffect 之后好像更新password延迟了（应该是开始的password length 没有变化，所以没有callback 产生的缘故）
    我的这个版本只用了normal function + useEffect

`difference`:

    1. useCallback function to generate a callback only when some variables value updates. This prevents unnecessary re-creation of the callback function on each render, optimizing the performance of the child components.
    
    2. useEffect: will to resolve the side effect, clear side effect after using it. such as data fetching, subscriptions, or manual DOM manipulations. 

`Triggers`:

1. useEffect is triggered after every render or when specific dependencies change.

2. useCallback is triggered only when its dependencies change, ensuring the memoized function is recreated only when necessary.

`purpose`:

1. useCallback: a performance optimization tool for memoizing functions

2. useEffect is a workhorse for handling side effects



`UseRef`: we can use it to refer an input value, we can put 
```
    <input ref={refvar}>
```

next, we can also select the inputbox text whenever I click button by using useRef. this will not trigger not re-render the page. and thus will not trigger the password change or page reloaded



