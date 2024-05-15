# Lesson 16: useEffect() = React Hoo that tells React Do some code when (pick one):
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
sometimes, exercute the code when re-rendering is meaningless and unnecessary. so we need to control the execution happened only in some certain situations
比如：我们想要添加一个eventListener 在DOM mounts的时候，不想add 几千个在re-renders 的时候，因为加一个就已经足够探测event happens的时候触发代码了。所以我们需要useEffect(()=>{eventListener}, [])
另外：如果我们add an eventListener on certain element, 但是之后将这个element unmounted from the DOM，此时我们需要最佳的也要remove 这个eventListener, 不然可能造成unexpected behaviour