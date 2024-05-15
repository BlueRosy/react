import React, {useState, useEffect} from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // 1. this function: everytime when the element re-renders, do this function: update the document title to be Count: updated count number ，每一次界面因为什么更新了，title都会变化和更新一次，触发原因未可知，不一定是count变化了，而是只要界面re-renders了都会触发
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })


    // 2. this function 有两个arguments，第一个是公式，第二个是空数组，这表示只有当这个element 刚开始mounts in DOM的时候，这个公式会执行一次，但是之后re-render elements的时候不会再执行了, 这就是说每一次count+1，title不会变化，他只会在最开始的时候变化一次
    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // }, [])

    // 3. when programs mounts and when the variable value changes, do the sidecode, 刚开始加载和每一次count变量变化的时候，都需要运行公式
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "pink" : "green");
    }

    return (
      <>
        <p style={{backgroundColor: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
      </>  
    )
}

// the second example: everthing when we justify the windows, the width and height displayed will change!!
function WindowAjustify(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // try to make useEffect above and close to the parent function and variables. this event listener will be added only once when DOM mounts. but once it is added, it will take effect forever once event happens
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // to remove the eventListener after unmount this element
        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, [])

    useEffect(()=> {
        document.title = `width: ${width} px; height: ${height} px`;
        
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // to make the size change, we need to add one EventListener to listen to when window sizes change
    // window.addEventListener("resize", handleResize);

    // ❌ currently we have added a lot of eventListener. when the element and pages re-renders. but we've only want to add on event listener when the dom mounts.
    // console.log("EVENT LISTENER ADDED");


    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}

export default WindowAjustify