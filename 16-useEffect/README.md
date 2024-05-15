# Lesson 16: useEffect() = React Hook that tells React Do some code when (pick one):
1. The component re-renders
2. this component mounts (create, and append it to the DOM)
3. the state of a value changes


## useEffect(function, [dependencies])
function could be a callback, anonymous code or arrow function
1. useEffect(() => {}) // run after every re-render (e.g. everytime when the code updates, even though we just add some comments, the page will re-renders❤️)
2. useEffect(() => {}, []) // runs only on mount (the first time DOM element has been created)
3. useEffect(() => {}, [value]) // runs on mount + when value changes

## USES
1. Event Listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. clean up when a component unmounts (removing elment from the DOM)

In conclusion: 
good point: use useEffect() can perform some codes only when some situations happen !! and have some options to do some cleanup code before 
the next re-render or unmount the element
sometimes, execute the code when re-rendering is meaningless and unnecessary. so we need to control the execution happened only in some certain situations
for example, adding an eventListener just when DOM mounts，without adding thousands of eventListener when re-rendering ，because adding one is sufficient for triggering actions when the event happens。in such a case, use `useEffect(()=>{eventListener}, [])`
Another example, add an eventListener on certain element, but later on when this element unmounted from the DOM，the best practice is to remove this eventListener (e.x inside the callback function. add `return () => {window.removeEventListener("resize", handleResize);}`), otherwise it might lead to unexpected behaviour!!