import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed,] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
  let pass = '';
  let str =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if(numberAllowed)    str += '0123456789';
  if(characterAllowed) str += '!@#$%^&*()_+{}|:<>?';
  
  for(let i=1; i< length; i++){
    const char =  Math.floor(Math.random() * str.length + 1);
   
    pass += str.charAt(char);
  }
  setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(()=>{
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);


  const passwordRef = useRef(null);
  const copyPassword = () =>{
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto 
      shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        
        <h1 className='text-3xl fond-bond mb-2'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className="w-full px-3 py-1 outline-none"
           placeholder='Password' readOnly  ref={passwordRef} />
           <button className='bg-blue-600 px-3 py-1 text-white' onClick={copyPassword}> Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range"
            min ={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            ></input>
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name='' id='' defaultChecked={numberAllowed}
            onChange={() =>{setNumberAllowed((prev) => !prev)}}
            ></input>
            <label htmlFor="number">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name='' id='' defaultChecked={characterAllowed}
            onChange={() =>{setCharacterAllowed((prev) => !prev)}}
            ></input>
            <label htmlFor="character">Character</label>
          </div> 

         </div>
      </div>
    </>
  ) 
}

export default App
