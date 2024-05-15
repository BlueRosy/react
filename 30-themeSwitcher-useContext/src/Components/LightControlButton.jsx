import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import { buttonContext } from '../App'
// import './Card.css'

function LightControlButton() {
    const {Toggled, setToggled} = useContext(buttonContext);

    function updateButton(e){
        console.log(Toggled);
        const round = document.querySelector(".toggleButton");
        const button = document.querySelector(".toggleButtonBox")
        // console.log(round.classList);
        
        if (Toggled){
            setToggled(false);
            round.classList.toggle("translate-x-4");
            button.classList.toggle("bg-slate-200")
            button.classList.toggle("bg-blue-400")
            
        }
        else {
            setToggled(true);
            round.classList.toggle("translate-x-4");
            button.classList.toggle("bg-slate-200")
            button.classList.toggle("bg-blue-400")
            console.log(button.classList);
        }
    }

  return (
    <div className='flex gap-2 items-center text-sm relative -top-20 -right-20'>
        <button className='toggleButtonBox bg-slate-200 rounded-full pr-5 pl-1 border-2 border-gray-300 border-solid transition-all' onClick={updateButton}><FontAwesomeIcon className='toggleButton text-white transition-all' icon={faCircle} /></button>
        <span className=' font-semibold text-black'>Toggle Theme</span>
    </div>
    
  )
}

export default LightControlButton