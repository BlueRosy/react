import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'

function App() {
  // in react , some html props syntax has changed, e.g. className instead of class, htmlFor instead of for
  return (
    <>
      <Card author="Rose" contact="yl4626@columbia.edu" personalImage='https://i.pinimg.com/564x/5b/83/39/5b83398968560aa15874f12bb01864bb.jpg' />
      <Card />
    </>
  )
}

export default App
