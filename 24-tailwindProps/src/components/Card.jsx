// rfce: a shortcut to create a model that creates react functional component export
// rafce: a shortcut to create a model that creates react arrow functional component with export

import React from 'react'

function Card({author, contact, personalImage="https://i.pinimg.com/564x/18/19/92/18199239e858f305ffe5898ba0b0b4c9.jpg"}) {
  return (
    <div className='font-serif'>
        <h1 className='text-2xl bg-gray-200 p-3 rounded'>A card for photos</h1>
        <img width={200} style={{float:'left'}} src={personalImage} alt="not yet defined" />
        <p style={{height:"200px", display:'flex', alignItems:'center',justifyContent:'left', fontSize:"15px", padding:"5px",}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ex perspiciatis maiores aliquam magni ipsa necessitatibus maxime eligendi impedit, voluptatem quia animi nemo reprehenderit quidem, illo ipsam laudantium officiis in!<br /><br />
        {author || "Anonymous Author"}
        <br />
        {contact || "No contact yet"}
        </p>
        
    </div>
  )
}

export default Card