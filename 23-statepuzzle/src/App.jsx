import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;


  // when you use this variable, and define this function, you will get console.log an increasing counter, but not the element shown on the screen,虽然后端打印出的counter值一直增加，但是展现在屏幕上quoted的counter却一直都是15. the reason is that it doesn't use a state variable, so when updating this counter, it doesn't trigger a UI re-rendering. solution: creating a state variable through useState()
  function Addcounter() {
    counter = counter + 1;
    console.log(counter);
  }

  return (
    <>
      <h1>React state puzzle</h1>
      <p>Counter value: {counter}</p>
      <button onClick={Addcounter}>Add value</button>
      <button>remove value</button>
    </>
  )
}

// use state variable counter
function App1() {
  const [counter, setCounter] = useState(15);

  function Addcounter() {
    setCounter(c => c + 1);
  }

  function Removecounter() {
    setCounter(c => c - 1);
  }

  return (
    <>
      <h1>React state puzzle</h1>
      <p>Counter value: {counter}</p>
      <button onClick={Addcounter}>Add value</button>
      <button onClick={Removecounter}>remove value</button>
    </>
  )
}

export default App1
