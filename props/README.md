# Class 4: props
1. props = read-only properties that are shared between components.
A parent component can send data to a child component.
systax: <Component key=value />

meaning: we could generate a parent component. then we can create children component with unique key to make them all unique


2. propTypes = a mechanism that ensures that the passed value is of the correct datatype
age: PropTypes.number
we can define the appropriate datatype for the props, so it the inputed values don't match with our defined propTypes, then react will console some alert message. This is for debugging purpose (it won't stop app running but will give us a warning !!)
suggestion: if we use props, coupled it with propTypes
e.g.
App.jsx:10 Warning: Failed prop type: Invalid prop `age` of type `boolean` supplied to `Student`, expected `number`

```
import PropTypes from 'prop-types'

Student.propTypes = {
    name:PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
```


3. defaultProps = default values for props in case they are not passed form the parent component
eg. `name: "Guest"` 
is the default value of `name` props，if any component don't input ` name` value when using it，then it will use the default value
```
some warning message:

warning: react-dom_client.js?v=c57edc99:521 Warning: Student: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
```
```
syntax:
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
```

Now, we can just pass a `<Student />` without any props, it will shows the default value