import React from 'react'
import {useParams} from 'react-router-dom'


function User() {
    // note: userid is defined in your router tree structure in the main.jsx.  params name can be customized 
    const {userid} = useParams();

    return (
      <div>
        User: {userid}
        <img src="/src/assets/logo34.jpeg" alt="" className='w-1/4'/>
        </div>
    )
}

export default User