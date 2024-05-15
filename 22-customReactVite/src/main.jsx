import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// to render the defined object, there are several methods 
/*
  1. use function-based component, return a html element (react can identify this element)
  2. var = (html elmenet), render this var (not a function, so just pass this varname just fine)
  
  3. create an object that react can understand through react language instead of self-defined json object 
*/

const reactElement = {
  type: 'a',
  props: {
     href: "https://google.com",
     target:'_black',
  },
  children: "Click me to visit google"
};

// the second method illustration
const SecondElement = (<a href='https://google.com' target='_blank'>click to visit google</a>);

// the third method to render this reactElement is to refine it using react language. (learning how react see the thing)

// first thing: element tag, second: all props, third: children
const newElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click to visit google',
  // if you are going to insert sth in JS {}, all those will be inserted into this object 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  SecondElement
  // newElement
  
)
