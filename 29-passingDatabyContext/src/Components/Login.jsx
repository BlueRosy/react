import React, { useState, useContext } from 'react'
import UserContext from './Context/UserContext';
// step 4: we need to use the userContext in the children component. this child component need to access the setUser to update the userInfo for another child to access to it

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // in this hook, we need to tell it which context you define. 
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // preventing the page from refreshing
        // e.preventDefault();
        // it can be directly mapping to the object with the variable name
        setUser({username, password});

    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username' />
        {" "}
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login