

// first create a custom html element, in react, everything to be inserted in the vitual DOM will be an object
const reactElement = {
    type: 'a',
    props: {
       href: "https://google.com",
       target:'_black',
    },
    children: "Click me to visit google"
};

// select the root element. create the vitual DOM, and then insert the html object into the vitual DOM
const mainContainer = document.getElementById('root');
console.log(mainContainer);

// define a function: render the reactElement in the mainContainer
customRenderRefined(reactElement, mainContainer);

// original version
function customRender(reactElement, container) {
    // use type to create an element
    const domElement = document.createElement(reactElement.type);
    // inject the content
    domElement.innerHTML = reactElement.children;
    // inject the properties
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
  
}

// a more refined version
function customRenderRefined(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}