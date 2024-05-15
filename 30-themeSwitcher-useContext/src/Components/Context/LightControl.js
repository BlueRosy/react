// define all createContext, context provider, and useContext here
import React, {createContext, useContext} from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {},
    }
)

export const ThemeProvider = ThemeContext.Provider;


export const useTheme = () => {
    return useContext(lightContext);
};

// now, in the app.jsx, you can use these three export

// next, set .light mode css package in index.css, .dark mode css package in index.css. in the tailwind.config.js file, update those mode style by variablename

// in the app.js, 识别现在的themeMode, 并且在document.html.classList 中 remove('dark', 'light'), 并且 classList.add(ThemeMode) through useEffect, app.js 中仍然需要define <ThemeProvider value{{three export}}>

// in the LightControlButton.jsx 中，根据button是否 click下去 update ThemeMode