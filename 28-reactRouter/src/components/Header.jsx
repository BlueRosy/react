import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    // if you nav want to separate into 3 parts, each parts should be in a div
  return (
    <nav className=' bg-sky-200 text-gray-800 py-2 px-10 static top-0 flex flex-wrap flex-row align-center justify-between text-lg border-4 border-white border-dashed'>
        <img src="/src/assets/logo1.png" alt="logo-image" className='w-14'/>
        <div className='order-1'>
            <ul className='flex flex-row gap-4 items-center justify-between h-full'>
                <li className='font-semibold'><Link to={'/Login'}>Log in</Link></li>
                <li className='font-semibold border-dashed border-2 border-white rounded-lg bg-sky-100 p-2 hover:bg-orange-50 transition-colors'><Link to={'/Register'}>Get Started</Link></li>
            </ul>
        </div>
        <div >
            <ul className='flex flex-wrap flex-1 flex-row gap-6 h-full items-center justify-between w-full'>
                <li><NavLink to={"/"} className={({isActive}) => isActive? 'text-white font-semibold': ''}>Home</NavLink></li>
                <li><NavLink to={"/about"} className={({isActive}) => isActive? 'text-white font-semibold': ''}>About</NavLink></li>
                <li><NavLink to={'/contact'} className={({isActive}) => isActive? 'text-white font-semibold': ''}>Contact</NavLink></li>
                <li><NavLink to={'https://github.com/BlueRosy/BlueRosy'} className={({isActive}) => isActive? 'text-white font-semibold': ''}>Github</NavLink></li>
                {/* <li><NavLink to={'/user'} className={({isActive}) => isActive? 'text-white font-semibold': ''}>User</NavLink></li> */}
                {/* <li><NavLink to={'/currency'} className={({isActive}) => isActive? 'text-white font-semibold': ''}>Currency</NavLink></li> */}
            </ul>
        </div>
    </nav>
  )
}

export default Header