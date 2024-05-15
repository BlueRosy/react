// first function Button shows how to pass a params into function, 如果没有任何参数，那么可以直接pass onClick={function}, 但是如果有哪怕一个参数需要输入function，需要pass onClick={() => function(params)}, 不然不会等到onClick 这个动作出现再做这个function，而是会直接运行

function Button(){

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name}, stop click me!`)

    // note: if you exercute a callback with params, it will exercute the code right away without waiting for onClick event❌
    // wrong way: onClick=handleClick2("fullmoon"); 
    // correct way" onClick={() => handleClick2("fullmoon")}
    return <button onClick={()=>handleClick2("fullmoon")}>Click me 🤣</button>
 
}

// second function Button shows condition rendering 
function Button2() {
    let times = 0;

    // once we assign the arrow function a variable name, we can then call this arrow function by this name(parameters)
    const handleClick = (name) => {
        if (times < 3){
            times++;
            console.log(`${name}, you clicked me ${times} times!`);
        }
        else {
            console.log(`${name}, stop click me! 😠`);
        }
    }

    return <button onClick={() => handleClick("fullmoon")}>Click me 😄</button>
    
}

// the third Button is for onClick event listener. event can be used as the argument passing through function. 
function Button3(){
    
    // const handleClick = (event) => console.log(event);
    const handleClick = (event) => event.target.textContent = "OUCH! 🥹";

    // return <button onClick={(e) => handleClick(e)}>Click me 😁</button>

    // console.log(event) will return a SyntheticBaseEvent, which contains a target attribute: button

    return <button onDoubleClick={(e) => handleClick(e)}>Click me 😁</button>
    // action: onClick单击，onDoubleClick双击
}

export default Button3