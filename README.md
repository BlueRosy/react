<h1>React: a JS Library that allows user to build an user interface out of individual pieces called components. </h1>
There are React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens , pages, and apps
<h4>component: self-contained section of code that functions as a reusable building block. components are function-based 成分是以方法定义的（.jsx file 中定义），我们定义一个方法然后export这个方法就能作为成分reuse了</h4>

<h4>React uses a syntax extension of JavaScript known as jsx (meaning JS XML)</h4>
jsx: allows you to write and return html within JS (a file that includes html elements) 

<h4>React also ulitize a virtual DOM (a lightweight version of the real DOM of a web page)</h4>
we can track any changes made to the virtual DOM and only apply that specific change to the real DOM without needing to refresh the entire web page (like live loader in VSCODE, but only update the changing part instead of the entire webpage!!!)


Required: JS, HTML, CSS, Node.js (a backend JS runtime environment and it exercutes JS code outside of a web browser. we are interested in its package manager: npm), vscode

Intalled Path:
 	•	Node.js v22.0.0 to /usr/local/bin/node
	•	npm v10.5.1 to /usr/local/bin/np

inside vscode -> open terminal (ctrl + `) -> type 
```
npm create vite@latest
```

<h4> vite: a development server. it is a modern replacement to create a react app, which a now outdated. vite allows you to create a project, enter a name, select a framework, a variant (JS or TS or +SWC) </h4>
vite helps you create this project folder with your selected framework within this folder (mine is my-react-app)

Now, run

  cd my-react-app
  npm install
  npm run dev

<img src="vite-react.png" width="200">

Inside <my-react-app> folder:
1. node_modules
   -- contains external library and packages that our projects relies on
2. public
   -- contains any public assets
   -- can contains public fonts, images, videos ``` (generally available via a url)
3. src 
   -- assets: contains images and videos. the items inside the assets will be bundled in the output 
   - other main react components shown in the web dev interface written in the .JSX ,and applied the .css styling. (e.g. the opening page with Vite and React maining written in App.jsx and applying styling in App.css. they are imported and shown in main.jsx. Inside the main.jsx, we have our vitual ROM: in the virtual ReactDOM, we create a root element, which shown in the "index.html" file, and show our App component)
   - if you want to create a new component, you can create .jsx inside the src folder ❤️

4. .html file apply src .jsx script and package.json file write the meta data used for this project


Conslusion: react is JS libraray that allows user to create components for reuse purpose!!. components reside in src .jsx files, which is a JS function that can include both (JS components and html tag elements). The components can be exported as a html element, that make this component reusable!!
syntax: 
  function FuncName(){
    return(
      // only one html tag, but inside this tag, we can include lots of children tags
      // if you want to return multiple <tag> components, try to wrap them into an one big <></> tag
    );
  }
  export default FuncName
then we can import this components in other .jsx and use it in our main.jsx and display it as a component in our web page.
TO reuse, 
1. import FuncName from `./file.jsx`;
2. <FuncName></FuncName> or <FuncName />


-------------------------------------
The following knowledge from another video: lecturer: Hitesh Choudhary
1. how to start a react project: recommended using a framework like next.js, Remix, Gatsby ``` or a bundler : vite
2. package manager: npm vs npx, what's the difference?
 - npm: node package manager: to install and uninstall, and update the JS packages on the worstation
 - npx: node package executor (helps you to directly execute the packages without installing them)

 - using npx (traditional method, default react):
 ``` 
 npx create-react-app foldername
 ```
- using npm and bundler(vite): 
```
npm create vite@latest
```
by running the code:
vite create a folder but do not put anything in the folder, like librarirs and modules, we have to cd the folder, run 
```
cd folder
npm install 
// based on the file: package.json to install the modules and lib
npm run dev 
```

The folder full structure dipdown (看package.json installation 手册):
1. React (alone doesn't work)
2. React-dom api (let you render React components on the client (in the browser), for generating a DOM,  web app) 
3. react-native (mobile app)
4. others (like 3D app)

区别使用create-react-app vs vite 两者下载的packages的不同之处：
1. dependencies: 
- vite没有一些essential libraries no react-scripts, only just react and react-dom
2. running scripts (they have different running scripts in the package.json):
- for create-react-app:
```
npm run start
npm start
```
- for vite:
```
npm run dev
```
3. src:
- in the react app: files are `.js` files
- in the vite app: files are `.jsx` files (```if you return any html from js, then called .jsx```; another convention: component .jsx file, we usually use `Capitalized naming convention`)

4. injecting scripts
- react default: using react-script and inject the script outside of index.html
- vite: put `<script> </script>` inside the index.html

react: seems everything as an object. we can use {} a dict to represent it
```
const reactElement = 
{
  type: 'a', // any html tag you want
  props: {
    href:"www.youtube.com",
    target: '_blank',
  },

  children: 'Click me to visit google',
}
```
but react doesn't recognise the key you give to the object, so you have to convert it into a html element or using react language.


<h4>state puzzle: </h4>

puzzle 1: state update -> re-render the page

1. when using useState, you can create a state variable, which can be automatically updated in the return html {state var}

2. when declare a variable using let variable = ; then write a function to update it manually, it cannot be updated in the html tag when clicking on the button (参考：counter program , and 23-statepuzzle)， 即使js能让你increment counter但是react不然帮助你让更新的counter被display 出来，因为react是UI library，react 有一个concept called state. 

`state`: any change on the state will re-render on the UI, so the screen will be updated is a state variable changes. and simply declare a variable through let , cannot get a state variable, which when updating, cannot trigger a UI re-rendering
`useState`: a method to create a state variable and setState() method to update the state variable
syntax: 
```
import React, {useState} from 'react';

[statevar, setState] = useState();
```

puzzle2 : state batching 
a phenomenon showing that when you setState() for multiple times together, they will rely on the original state variable value to update (batching the change all together)

```
function addCount(){
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
}

// note: the result will not be counter + 4; instead, it will be counter + 1 when clicking the button. this will bundle everything together. the solution: using an updater function or a callback function or an arrow function. they are depending on the prevCounter instead of current Counter value

function addCount(){
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
}
```

<h3>React Virtual DOM, React fiber Architecture</h3>

`react virtual dom` mimic the true DOM.

`React Fiber` is an ongoing reimplementation of React's core algorithm. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is `incremental rendering`: the ability to split rendering work into chunks (updated work in batching model, 一批一批的进行页面更新，而不是立即更新) and spread it out over multiple frames。
Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

prerequisites knowledge:
- React Components, Elements, and Instances - "Component" is often an overloaded term. A firm grasp of these terms is crucial.
- Reconciliation （react用于区别一个DOM和另一个DOM的算法，帮助决定哪一个DOM的部分需要被改变。 React API的核心思想是更新updates -> 就类似于整个app的re-render一样，但是rerender整个app有时候非常昂贵要付出表现的代价。而react的优化能够权衡两者，给予让页面rerender的方式又能保持整体的网页app表现。这个部分的优化也是一部分的协同）, `协同算法是基于virtual DOM的理解，当render一个react app的时候，一棵树的所有nodes来描述这个app会形成并且保存在内存中，然后这棵树会被冲到rendering的环境中（比如在网页app中，他会被翻译成一系列的DOM 操作“ 。 然后当app被更新updated（通常通过setState），新的树会被生成，新的树和之前的树不同，来计算什么操作对于app需要被更新`
  
  - 不同的组成component types 被假设产生可持续的不同的树，react 不会想要diff他们，而是完全替代old trees
  - lists items需要不同的，稳定的可以预测的 unique keys

- update: A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render 数据的改变用于render 更改一个react app，通常是更新状态的公式结果，导致一个页面的更新。
- reconcilation vs rendering: DOM也就仅仅是其中一个react 可以render的 rendering 环境，其他主要的目标是native IOS 系统和Andrid views，还有react-3D-rendering 通过react native。react的设计将协同和render区别开，分开进行，先进行reconcile（计算树的那个部分已经发生了改变），然后rerender （使用前者的信息进行实际update rerendered app). 这个分离让 React DOM 和 React Native可以使用他们自己的rerenders同时共享同样的reconciler （通过react core 提供）
- React Basic Theoretical Concepts - A description of the conceptual model of React without implementation burden.
- React Design Principles:

  - scheduling: 这个过程决定了何时工作需要被表现，
  - work：任何需要被表现的计算，通常是一个update的结果
  react的设计遵循指导有必要的时候，计算才会被执行，之前可以被存储起来不是任何的新数据来的时候都要进行计算的。 react不是一个简单的数据处理的library ，而是一个用于建立UI 用户界面的 library。应用场景：If something is offscreen, we can delay any logic related to it. 如果什么从页面上消失，我们可以延迟关于这些逻辑的rerendering， If data is arriving faster than the frame rate, we can coalesce and batch updates. 如何数据到达的速度快于贞速，我们可以合并更新 We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames. 我们可以优先处理来自和用户进行互动的更新工作，将其他更不重要的更新工作比如背景工作延后（比如rendering新的内容）来避免缺失的贞
  - 重点：
  1. 在一个UI用户界面中，没有必要每一个更新都必须立即被应用，如此这般会比较的浪费，导致贞丢失，降低用户体验
  2. 不同的updates更新种类有不同的优先级 - 一个动画的更新需要完成的比起数据存储更新更快
  3. A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you. 当前react没有特别利用scheduling，更新于整个子树的结果会被理解的rerendered，这也就造成了整修react core 的算法来利用scheduling的优势是驱动Fiber的主要驱动力


`Fiber architecture 理解`：Fiber 的主要目标就是让react能力更好的利用scheduling的能力，实现：
1. pause 暂停更新工作work，之后再回来 （pause work and come back to it later.）
2. 对不同种类的工作分配不同优先级 （assign priority to different types of work.）
3. 重新利用reuse 之前完成的工作 （reuse previously completed work）
4. abort 丢弃不需要的工作 （abort work if it's no longer needed.）
为了做好上述，需要一种方式将work 分离成为units单位，fiber就是a unit of work

`fiber components` = functions of data 成分是数据公式，所以rendering 一个react app 就类似于calling a function 召唤一个公式（包含其他公式），在这种方式下，计算机追踪一个程序的执行 = using call stack ，当一个公式被执行，一个新的stack frame 被增加到栈中，这个stack frame 表示需要被这个function所表现的work。
当处理UIs的时候，问题就是：他们的工作需要被同时一次性执行，造成animations 掉帧看起来缺漏，特别是有一些工作可能没有必要因为她被一些更新的更新所替代了。这是为什么UI components 和 function之间的类比breaks down，因为成分具有更细分化的concerns但是functions 更新总体化。

更新的浏览器和react原生执行APis帮助解决这个问题：requestIdleCallback schedules更低的优先级更是，被call在idle 空闲时期，requestAnimationFrame schedules a high priority function 更高的优先级，被执行在下一个animation frame。但是为了使用这些APIS，需要一个方式来将rendering work 分离成为incremental unit （不仅仅只依赖于call stack），因为这样的设计能自定义call stack 执行任务的顺序 来优化rendering UIs的表现，而不是从前那样来一个function入栈，然后按照顺序call function了。 而fiber的目的就是在于此（重新实时 stack，专注于 react components, 可以将一个fiber = 一个虚拟的stack frame）。

这样的设计（多个react components，多个stack frames）让我们能在内存中追踪stack frame 而等到想要的时候再去执行他们，这对于scheduling 和优先任务先后执行非常重要。除了scheduling之外，手动的处理stack frames 解锁了其他潜在特征比如共时性`concurrency` 和 错误边界 `error boundaries` 

`fiber 就是react component =  a JavaScript object that contains information about a component, its input, and its output. A fiber corresponds to a stack frame, but it also corresponds to an instance of a component.` fiber的重要fields：

  - type : 描述一个成分对应着什么，复合成分type = 一个公式function/class component他自己，对于host components（比如div span等等），type就是一个string
  - key：在reconciliation的时候被用于决定是否fiber可以被重新的利用
  - child & sibling: 描述其他的function / fibers，描述一个fiber的递归树结构. child fiber will be returned by a parent fiber or function。sibling fibers are mutliple children list returend by a fiber. 一个孩子的其他siblings，child fibers会形成一个单链表，head时child1，sibiling of child1 = child2

    ```
    function Parent() 
    {
      return <Child /> // this is a fiber or another function
    }

    function Parent() {
    return [<Child1 />,   <Child2 />] // these are sibling fiber when render returns 多个fibers
    }
    ```

- return fiber = Parent fiber = after calling another fiber and return to this function (return address of a stack frame)
- pendingProps and memoizedProps: `Props 是 一个function的arguments`（passed in the function params and child fibers), 一个fiber的pending Props 被设置在开头，memorized Props 被设置在结尾，当进入的pendingProps =memorized Props 表示之前的output可以被重复使用，阻止无用的工作
- pendingWorkPriority： 这一个一个数字表示在fiber中的work的优先级
- alternate:
  
  - flush: flush a fiber表示render 他的output 到屏幕上
  - work-in-progress: a fiber 会没有被完成，意味着一个stack frame还没被returned
  任何时间，一个成分component instance 最多拥有两个fibers对于它，一个是flushed fiber, 一个是work-in-progress fiber
  一个fiber的alternate通过一个公式cloneFiber懒惰建立，不是总呀创建一个新的object，cloneFiber尝试reuse fiber's alternate 如果他存在的话，最小化分配

- output:returned host components or leaf nodes of react app (just a return value of a function), 记住：每一个fiber都会有一个output，但是只有被host components 创建的output才会被放在leaf nodes上，然后output会被转化到树上。output是最终会被给予到renderer，允许他最终flush changes to rendering environment实现这些更新

<h3 style="color:pink;"> 24. Tailwind css </h3>
tailwind css is a css framework which allows you to customize css styling sheet in a more convenient way. (A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. 在html中就能建立出非常美观的css)


<h3 style="color:pink">27. custom hooks & reuable components </h3>
custom hooks: can be put in the hooks folder. they are .js file that return some values. 

reusable components: those are .jsx files that will return a html element like a puzzle piece for completing the whole picture. the key is to decide the props for the components so that it can be customized based on the base component


<h3 style="color: blue">28. react routing: different pages will route to different urls</h3>


<h3 style="color: blue">29. parent components passing parameters or data to children components</h3>

1. passing props way down to the specific child by travelling from the top to the bottom (but it will make code messy and some middle components don't need to use that props)

2. state management. all variables can be separately put into another stack , so that anytime when a component wants to get a certain prop, it can directly get it from that stack. this stack is called `context`
all the children components will be able to access to this context, they can also update values in the centralized context

```
process:
start --
       |
       create a react App -
                           |
                          create a Context
                           |
                          provide the Context(create a Context Provider to feed this Context)
                           |
                          Consume the Context in 
                          Child Components
                          |
                          End
```



        




