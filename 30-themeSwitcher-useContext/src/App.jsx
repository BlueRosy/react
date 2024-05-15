import React, { createContext, useState } from 'react'
import Card from './Components/Card'

export const buttonContext = React.createContext();
  

function App() {
  const [Toggled, setToggled] = useState(false);
  
  return (
    <buttonContext.Provider value={{Toggled, setToggled}}>
      <Card />
    </buttonContext.Provider>
  )
}

export default App