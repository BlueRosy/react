import React from 'react'

function Contact() {

    const name = "Rose Liu"
    const email = 'yl4626@columbia.edu';
    const phone = '15956500406';
    const address = 'NSW, Syndey';

  return (
    <div className='p-20 flex justify-center items-center contentBox'>
        <div className=' w-1/2 rounded-lg p-2 flex items-center justify-center gap-5'>
            <img src="/src/assets/logo3.jpeg" alt="" className='w-1/3 min-w-48' />
            <p className='text-lg'>
                name: {name}
                <br />
                email: {email}
                <br />
                phonenumber: {phone}
                <br />
                address: {address}
            </p>
        </div>
        
    </div>
  )
}

export default Contact