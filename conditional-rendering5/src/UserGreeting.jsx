// should use Proptypes when using props
import PropTypes from "prop-types"

function UserGreeting(props){
    // 1. first option: using if statement
    // if (props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Log in to continue!</h2>
    // }

    // 2. second option: using a ternary operation

    // return (props.isLoggedIn ? 
    // <h2 className="welcome-message">Welcome {props.username}</h2> : 
    // <h2 className="login-prompt">Please Log in to continue!</h2>)

    // 3. readable option 
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please Log in to continue!</h2>;

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

// define the functionname.propTypes
UserGreeting.propTypes = {
    username:PropTypes.string,
    isLoggedIn:PropTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting