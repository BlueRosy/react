# Lesson 19: useRef
1. useState() = re-renders the component when the state value changes
2. useRef() = "use Reference" `Does not cause re-renders` when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders
    - 1. Accessing / Interacting with DOM elements
    - 2. Handling Focus, Animations, and Tranitions
    - 3. Managing Timers and Intervals


useState re-render when state variable changes -> useEffect will then execute function every time when the component re-render!!  

useRef returns `an object`, and the component `renders at once`.!!
note：
1. updating the object value won't trigger the component re-rendering
2. useRef create an object, this object has one property: `.current` represents the current value of this ref object. it could be any value!!
3. useRef can store a number, string, boolean, html element, null, or array or object