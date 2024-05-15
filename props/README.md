# Class 4: props
1. props = read-only properties that are shared between components.
A parent component can send data to a child component.
systax: <Component key=value />

meaning: we could generate a parent component. then we can create children component with unique key to make them all unique


2. propTypes = a mechanism that ensures that the passed value is of the correct datatype
age: PropTypes.number
这是一种机制，确保我们输入的值时正确的数据类别
我们定义这个property 的数据类型，若是输入的值不符合数据类型，react就会在console中给予提示，for debugging purpose (it won't stop app running but will give us a warning !!)
suggestion: if we use props, coupled it with propTypes
e.g.
App.jsx:10 Warning: Failed prop type: Invalid prop `age` of type `boolean` supplied to `Student`, expected `number`

import PropTypes from 'prop-types'

Student.propTypes = {
    name:PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}



3. defaultProps = default values for props in case they are not passed form the parent component
eg. name: "Guest" 
为components的property设置具体的property的default value，若是有一个component之后使用的时候没有输入这个property值，那么就输出默认值
warning: react-dom_client.js?v=c57edc99:521 Warning: Student: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

Now, we can just pass a <Student /> without any props, it will shows the default value