import React, {useState, useEffect, useRef} from 'react'

function PasswordGenerator() {

    const [pwlength, setPwlength] = useState(8);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeChars, setIncludeChars] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);
    const numbers = "0123456789";
    const chars = "~!@#$%^&*()_+-=/?.,><':;][}{|`";
    const alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


    // second learning: useEffect will trigger the function when mounting and whevener those variable changes, which triggered by onClick event since those variables are state variables (which when setState will rerender the page). 
    // when callback uses a useCallback function, this callback will only be generated when those variables update values, thus, this callback must use an arrow function to prevent run it at first
    useEffect(pwGenerator, [includeChars, includeNumber, pwlength]);

    function handlePwlengthChange(event) {
        setPwlength(event.target.value);
    }

    function handleNumberChange(event) {
        setIncludeNumber(event.target.checked);
    }

    function handleCharChange(event) {
        setIncludeChars(event.target.checked);
    }

    // here, you can use a useCallback function to generate a callback only when some variables value updates. This prevents unnecessary re-creation of the callback function on each render, optimizing the performance of the child components.
    function pwGenerator() {
        let candidates = alphas;
        if (includeNumber) {
            candidates += numbers;
        }

        if (includeChars) {
            candidates += chars;
        }

        // random number generator
        let newpassword = "";
        for (let i = 0; i < pwlength; i++){
            const index = Math.floor(Math.random() * candidates.length);
            newpassword += candidates[index];
        }


        setPassword(newpassword);
    }
    
    

    // first learning: how to set copyText and how to select the input text. (we can also use useRef to make this text selected, inside the input tag set ref={varRef}, next, varRef.current will be this input element, similar to document.getElementById)
    function copyText(event) {
        // const pgText =document.getElementById("pgText");
        // // to copy the input password into the clipboard
        // navigator.clipboard.writeText(pgText.value);
        // // to select the input box content itself: using .select()
        // // to select the input box border: using .focus()
        // pgText.select();


        navigator.clipboard.writeText(password);
        passwordRef.current.select();
        // current will have some methods. eg .setSelectionRange(0, 4) will only get the first 4 chars 
    }



  return (
    <div className='pg-container'>
        <h3>Password Generator</h3>
        <input id="pgText" className='border-dotted border-4 rounded-l-lg' type="text" defaultValue={password} readOnly ref={passwordRef}/>
        <button className='rounded-r-lg font-semibold bg-gray-300 text-xl pb-1 pt-0 pr-2 pl-2 cursor-pointer hover:bg-red-300 transition-colors' onClick={copyText}>copy</button>
        <div className='options mt-3 align-middle'>
            <div className='flex align-middle justify-center gap-2 mb-1'>
                <input className='cursor-pointer' type="range" name="rangeInput" min="8" max="20" defaultValue="8" onChange={handlePwlengthChange} />                                    
                <output id="amount" name="amount" htmlFor="rangeInput" className='text-red-100 '> Len: {pwlength}</output><br />
            </div>
            
            <div className='flex align-middle justify-center gap-6'>
                <div className='flex items-center gap-1'>
                    <input className="cursor-pointer" type="checkbox" name='numbers' onChange={handleNumberChange}/>
                    <label htmlFor="numbers"> Numbers</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input className="cursor-pointer" type="checkbox" name='characters' onChange={handleCharChange}/>
                    <label htmlFor="characters"> Characters</label>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PasswordGenerator