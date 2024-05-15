# Class 6: render Lists
a list / array in the JS is formatting as [a, b, c, d, e, ``]
if we just save it in the function, return a list directly, and pass into our App.js with `<component />`, we will get a long string (which concatenate every element in the array together without any splits, e.g `appleorangebananacoconutpineapple`)

To render a list: we need to 
```
return a 
<!-- <ul>
    <li></li>
    <li></li>
    <li></li> 
</ul> --> format
```

1. if this list is just a string list
```
syntax:
    const list = [a, b, c, d, e];
    const ListItem = list.map((element) => <li>{element}</li>)
    return <ul>{ListItem}</ul>
```


2. if this list is an object list
where `[{}, {}, {}, {}]`
using the similar syntax above:
we will have a Warning: Each child in a list should have a `unique "key" prop`. (react want to assign each li a unique key)
so set` li key={element.name or other unique value prop}`

```
syntax:
    const list = [a, b, c, d, e];
    const ListItem = list.map((element) => <li key={element.uniqueprop}>{element}</li>)
    return <ul>{ListItem}</ul>
```

note: we can `sort` the array by number, by alphatical or reverse order, but we need to pass some functions
for the list, we can use `.map()` to convert each item into a similar pattern `<li>` 
`.filter()` to filter the list item, 
`.sort()` method to sort the item by some props



3. create a reusable component by using props , allowing the app.jsx passing some dedicated props to create different item lists
 - use props and based on properties to build a model
 - use `if` statement, conditional rendering ! check if itemList.length > 0, if it is return the list , if not, return null (`ternary operator, if statment, or &&: short socketing`)
 - if we have props and pass those props.property into function, then if they are missing, the whole function will go into bug. that will make the following code unexecutable or cause a TypeError (if we want to quote null.property). so we have to pass some `defaultProps` to prevent this from happening!!!
    - 1. define string, number, bool, or other simple type
    - 2. to define complex datatype, such as a list of objects, we need to use `PropTypes.array(PropTypes.shape({propname:PropTypes.type, ```}))`