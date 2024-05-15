import ComponentB from "./ComponentB"
import React, {useState, createContext} from "react"
// Component A is the provider component, so it need to createContext for reuse

// 2. export this ElementComponent
export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("fullmoon");


    // step 3: wrap the child component which accepts the params with the parent component
    return (
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
        
    </div>)
}

export default ComponentA