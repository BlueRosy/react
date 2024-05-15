# Lesson 19: 
1. useState() = re-renders the component when the state value changes
2. useRef() = "use Reference" Does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders
    - 1. Accessing / Interacting with DOM elements
    - 2. Handling Focus, Animations, and Tranitions
    - 3. Managing Timers and Intervals


useState re-render when state variable changes -> useEffect will then execute function every time when the component re-render!! 只要useState的state var变化，就会自动触发useEffect执行一次公式 

useRef returns an object, and the component renders at once.!!
note：
1. updating the object value won't trigger the component re-rendering
2. useRef create an object, this object has one property: .current 表示当前这个object的值
3. useRef can store a number, string, boolean, html element, array or object