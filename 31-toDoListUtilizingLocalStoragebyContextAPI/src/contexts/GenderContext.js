import React, {createContext, useContext} from "react";


export const genderContext = createContext({
    // true: girl, false: boy
    gender: true,
    modeConvertion: () => {},
})

export const GenderContextProvider = genderContext.Provider;

export const useGenderContext = () => {
    return useContext(genderContext);
}
