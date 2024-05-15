import PropTypes from 'prop-types'
// note: import from cannot use ``,but should use '' or ""

function Student(props) {
    // note: props is a js object
    return (
        // props.properties, which will gain values from the quoted place, App.jsx. 
        // if the property is boolean , will not shown in the web screen. so we recommend to using a ternary operator
        <div className="student">
            <p>
                Name: {props.name}
            </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    )
}

// to use the propTypes , we should import the react module from node_modules.
// note: here is PropTypes.bool not PropTypes.boolean (warning)
Student.propTypes = {
    name:PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// add default prop, but defaultProps will soon gone. give a warning message!
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student