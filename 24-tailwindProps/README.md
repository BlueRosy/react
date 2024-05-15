# tailwind css + Props

## 1. tailwind css
Setting up tailwind css: tailwind css is a css framework which allows you to customize css styling sheet in a more convenient way. (A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. 在html中就能建立出非常美观的css)

https://tailwindcss.com/docs/guides/vite

1. Create your project
```
    npm create vite@latest  my-project -- --template react
    cd my-project
```
2. Install Tailwind CSS

- Install tailwindcss and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.
```
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

3. Configure your template paths (define where I can find my contents like html .js .jsx, .ts. tsx)

- Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

4. Add the Tailwind directives to your CSS

- Add the @tailwind directives for `each of Tailwind’s layers` to your `./src/index.css` file.

``` {index.css}
// inside the index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start your build process
```
    npm run dev
```


6. Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

```

## 2. components creation:
class-based component (aborted)
function-based component:
  1. function funcName() {}
  2. arrow based function component: const funcname = () => {}

component benefits: 
for resue purpose, one in all place, with props, you can customize different component instance and reuse it into different situations.
to make a component more reusable, considering using props 


<h2>3. Props: </h2>
an object including component arguments

1. defintion

```
// quote attributes by props.attributename
function funname(props){
  props.attributename
}

// directly using the properties by destructing
function funname({propname1, propname2}){
  quote propname1 
  quote propname2
}
```

2. using the default props value 

```
way1: define the defaultProps

way2 (not a scalable solution): inside the component use {attributename || default_value }

way3: function funcName({attr1 = "defaultval"}){}
```
3. check the prop type
a prop can be passed as a string, a  number, a boolean, an array or an object, just define it

4. passing props in the fiber or component. A better way is to before return the component, define the object or variable first, next pass {object or variable} into the component as props value

```
  attribute=""
  attribute={number}
  attribute={array}
  attibute={object}
  attribute={boolean}

```

