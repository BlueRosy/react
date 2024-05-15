import React, { useContext } from 'react'
import UserContext from './Context/UserContext'


// display the username
function Profile() {

  // step5: access user infomation from the Context, 
  // updated by another child: Login.jsx

  const {user} = useContext(UserContext);

  if (!user){
    return <h1>Not logged in !!</h1>
  }
  else{
    console.log(user)
    return <h1>Hello! {user.username}</h1>
  }
}

export default Profile