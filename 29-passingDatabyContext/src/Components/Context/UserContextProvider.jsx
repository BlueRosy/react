import React, { useState } from "react";

import UserContext from "./UserContext";

// note here how to define params: must be children, cannot be any other params name, or else it will get wrong
const UserContextProvider = ({children}) => {

    // this data now is in the context, should be available to all the children.
    // if we have more data, then add more here
    const [user, setUser] = useState(null);

    return (
        // notice in the 1st step, we have the UserContext which have the default prop Provider.
        // and this provider can provider both props and method. notice to be double curly braces {{}} for passing multiple values
        // you can give any custom function to this too
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


// step2: export the Context Provider which feeds the Context
export default UserContextProvider