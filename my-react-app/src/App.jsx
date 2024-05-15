import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import './App.css'

// to reuse the component, we can type the <name of component></name of component> or <componentName />
function App() {

  // we can reuse the components countless times
  return (
    
    <>
      <Header></Header>
      <Food></Food>
      <Food></Food>
      <Footer />
    </>
  )
}

export default App
