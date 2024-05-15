import React, { useCallback, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import LightControlButton from './LightControlButton'
import { buttonContext } from '../App'

// this components is for the card component
// you can pass the params to make this component more reusable
function Card() {

  const {Toggled, setToggled} = useContext(buttonContext);

  let itemStyle = null;
  
  // note: we can use the variable and quote it in the return tag element
  if (!Toggled){
    itemStyle = "flex flex-col items-center justify-center p-10 pb-5  border-2 border-solid border-slate-300 w-80 rounded-lg m-auto mt-32 transition-all";
  }
  else {
    itemStyle = "flex flex-col items-center justify-center p-10 pb-5  border-2 border-solid border-slate-300 w-80 rounded-lg m-auto mt-32 bg-slate-600 text-white transition-all";
  }


  return (

    <div className={itemStyle}>
    <LightControlButton></LightControlButton>
    <img src="/src/assets/basket.jpeg" alt="basket display" className='w-32 ' />
    <h2 className='font-bold text-lg mt-2 mb-1'>Wicker Hamper Woven Basket with Handle Double Lid for Shopping</h2>
    <div className='text-xs flex gap-1 items-center justify-start w-full mb-4'>
        <ul className='text-red-400 flex gap-1'>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
        </ul>
        <span className='bg-sky-300 px-2 py-0.5 rounded-lg'>5.0</span>
    </div>
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>$21.56</h1>
        <button className='text-sm text-white bg-blue-500 px-3 py-2 rounded-lg'>Add to cart</button>
    </div>
</div>
 
    
  )
}

export default Card