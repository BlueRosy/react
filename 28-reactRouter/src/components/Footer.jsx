import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faDiscord, faTwitter, faGithub, faDribbble} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='border-y-2 border-gray-200 w-full'>
        <div className='flex align-middle justify-between p-3 w-4/5 m-auto'>
            <img src="/src/assets/logo1.png" alt="logo-image" className='w-24'/>
            <div>
                <ul className='grid grid-cols-3 gap-3 h-full text-center items-center justify-center'>
                    <li ><Link to={"/"}>RESOURCES</Link></li>
                    <li ><Link to={"/"}>FOLLOW US</Link></li>
                    <li ><Link to={"/"}>LEGAL</Link></li>
                    <li ><Link to={"/"}>Home</Link></li>
                    <li ><Link to={"/"}>Github</Link></li>
                    <li ><Link to={"/"}>Privacy Policy</Link></li>
                    <li ><Link to={"/"}>About</Link></li>
                    <li ><Link to={"/"}>Discord</Link></li>
                    <li >Terms & Conditions<Link to={"/"}></Link></li>
                </ul>
            </div>
        </div>
        <div className='flex align-middle justify-between py-4 w-4/5 m-auto border-t-2'>
            <p>&#169; {new Date().getFullYear()} BlueRosy. All Rights Reserved</p>
            <div>
                <ul className='flex gap-4 flex-wrap'>
                    <li className='text-blue-600'><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                    <li className='text-indigo-500'><a href=""><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a></li>
                    <li className='text-blue-400'><a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    <li className='text-pink-400'>
                        <a href=""><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></a>
                    </li>
                    
                </ul>
            </div>
        </div>
       
        
    </footer>
  )
}

export default Footer