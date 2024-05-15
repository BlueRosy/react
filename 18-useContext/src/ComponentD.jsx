// for the receiver, first, we need to import useContext
import React, { useContext } from "react"

// next we need to import the Context content from provider component
import { UserContext } from "./ComponentA"


// 3rd. useContext(ElementContext) to get the context and store the value!!
function ComponentD(){

    const user = useContext(UserContext);

    return (
    <div className="box">
        <h1>ComponentD</h1>
        <h2>{`Bye! ${user}`}</h2>
    </div>)
}

export default ComponentD