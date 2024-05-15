import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Currency, {preDataLoader} from './components/Currency.jsx'


// create broweser router can be inputted an array of object. this layout will always appear in different route. the logic: a sandwich, which owns children route (the next layer), the sibling route (the same layer), if a Route element doesn't have a child route, then it can be a self-closed element
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='user' element={<User />}>
        <Route path=':userid' element={ <User /> }></Route>
      </Route>
      <Route path='currency' element={<Currency />} loader={preDataLoader}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
