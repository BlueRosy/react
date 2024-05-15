# react Router library
for multiple web pages and building a website. when user submit sth, they will be redirected into other pages. that is a router. react itself is a single page rendering library. so it may cause some bad user experience


#### step1: install react-router-dom
```
    npm install react-router-dom
```


#### step2: create src/components folder 
this folder will be used for putting important, reusable html components composite a website, eg. a header, a footer

A Header: can be separated into three segments. 
construction: note: since div order changed, using a flex strcuture in Header or nav element, for the second div className='order-1' to move it right to the end

```
Header
  |_ img
  |_ div
  |   |_ ul
  |       |_ li
  |       |_ li
  |_ div
  |   |_ ul
  |       |_ li
  |       |_ li
  |       |_ li
  |       |_ li
```
        
Similar to Footer, Footer can use a flexbox to separate 2 segments. inside the segment, decide to use a flexbox or grid to display     

### step3: create a layout.jsx inside the src folder
this layout.jsx will be used as a standard layout, in which has a header and a footer but the middle layer will be different for each page (a industrial standard)


### step4: adding a router
First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.
The main.jsx file is the entry point. Open it up and we'll put React Router on the page.
Create and render a browser router in main.jsx

逻辑：创建一个router object -> router object has a root path and inside the root path, correlate the child path with components. finally, insert a router into the reactDOM rather than the component itself

`router creation method1: create an router object`

```
/* existing imports */
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



```

`router creation method2: create .jsx format router`

```
    import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


```

### step5: use a `<Link />` element in your single page component rather than a `<a />`, which will redirect you into another page. all we did in react-route-dom is a single-page app (but have a virtual mutliple route), rather than true multiple pages 
```
import {Link} from "react-router-dom";

```

another way: `<NavLink>`
A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active", "pending", or "transitioning". based on these condition, we can decide different properties for designing NavLink

when you are in the url which NavLink to, then the certain css can be added through the conditional rendering!!

```
    import { NavLink } from "react-router-dom";

<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;

```

### step 6: get useid or other info from the url
tool: useParams from 'react-router-dom'
```
  import {useParams} from 'react-router-dom'

  // in the component we want to get the url segment
  const {userid} = useParams();
  // then you could this paramsto display in the user screen 

  // in the main.jsx page , you should  add the router path and 具体化params name = userid

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='user' element={<User />}>
        <Route path=':userid' element={ <User /> }></Route>
      </Route>
    </Route>
  )
)
  

```

`note: vite.js base path: /`. if you want to find the image, please use the base path.


### step 7: preloading and preprocessing data 
use tool: useLoaderData
1. create a component, define an arrow function and give it a variable name ouside the component function, be sure to export this variable
2. in the main.jsx, import this function beyound the component, and define the`<Route loader={func}>`
3. in the component, import the useLoaderData from 'react-router-dom', and const data = useLoaderData();
this should work



# font awesome in React. many company logo svg can be imported from here
to use it, follow serveral steps:
```
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest

// add some icons by importing from the lib
in the component.jsx file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faDiscord, faTwitter, faGithub, faDribbble} from '@fortawesome/free-brands-svg-icons'

<FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>

```

