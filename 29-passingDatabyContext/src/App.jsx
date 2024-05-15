import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Components/Context/UserContextProvider'

function App() {
  // step3: apply the userContext provider 
  // now all the components which are wrapped inside this provider will be aware of the data and method
  return (
    <UserContextProvider>
        <h1>React video for context API</h1>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
    
  )
}

export default App