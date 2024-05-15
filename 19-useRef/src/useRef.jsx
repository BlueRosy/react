import React, {useRef, useEffect} from "react";

function UseRef(){
    // useRef returns an object, and the component renders at once.!!
    // updating the object value won't trigger the component re-rendering
    // useRef create an object, this object has one property: .current 表示当前这个object的值
    let InputRef1 = useRef(null);
    let InputRef2 = useRef(null);
    let InputRef3 = useRef(null);


    // now this component only render at once when ref (useRef var) changes, which means useRef updates the var without re-render the component
    useEffect(() => console.log(`COMPONENT RENDERED`));

    function handleClick1(){
        InputRef1.current.focus();
        InputRef1.current.value = "Hi, dear !!";
        InputRef1.current.style.backgroundColor = 'pink';
        resetInput(InputRef2);
        resetInput(InputRef3);
    }

    function handleClick2(){
        InputRef2.current.focus();
        InputRef2.current.value = "Hi, dear !!";
        InputRef2.current.style.backgroundColor = 'pink';
        resetInput(InputRef1);
        resetInput(InputRef3);
    }

    function handleClick3(){
        InputRef3.current.focus();
        InputRef3.current.value = "Hi, dear !!";
        InputRef3.current.style.backgroundColor = 'pink';
        resetInput(InputRef1);
        resetInput(InputRef2);
    }

    function resetInput(element){
        element.current.value = "";
        element.current.style.backgroundColor = "";
    }

    // note: ❤️this can make InputRef.current = input object, this object will have a lot of properties， and change these properties without re-renders
    return (
    <>
        <button onClick={handleClick1}>Click me 1</button>
        <input type="text" ref={InputRef1} /><br />
        <button onClick={handleClick2}>Click me 2</button>
        <input type="text" ref={InputRef2} /><br />
        <button onClick={handleClick3}>Click me 3</button>
        <input type="text" ref={InputRef3} />
    </>)
}

export default UseRef