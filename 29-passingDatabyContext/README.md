# useContext: passing data from parent to children

Inside the react project
1. create a open Context for storing published variables and methods -> Checking Contexts/UserContext
2. create a Context Provider which decide who should provide the context (should be in the parenet component, or you can separately define such a .jsx file and return a syntax with {children} as the params) -> Checking Contexts/UserContextProvider
3. wrap all children elements inside the Context Provider -> Checking the App.jsx
4. access all variables and methods through useContext hooks (in all children components) -> Checking Login.jsx and Profile.jsx