import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0 } from '@fortawesome/free-solid-svg-icons'
import { useGenderContext } from '../contexts'

export default function ModeControl() {

    const {gender, modeConvertion} = useGenderContext();
    
    
    // import gender mode for usage !!
    const genderIcon = () => {
        const boy = "/src/assets/boy3.png";
        const girl = "/src/assets/girl6.png";
        console.log(gender ? girl : boy); 
        return (gender ? girl : boy)

    }

  return (
    <button className='fixed top-5 right-5' onClick={modeConvertion}>
        <img src={genderIcon()} alt="control-icon" className='w-8'/>
    </button>
  )
}
