import { useState } from 'react'
import './App.css'

function App() {
 
const [Counter, setCounter]  =  useState(15);


  const AddValue = () =>{
  setCounter((preveiosCounter) => preveiosCounter + 1)
  setCounter((preveiosCounter) => preveiosCounter + 1)
  setCounter((preveiosCounter) => preveiosCounter + 1)
  }

  const RemoveValue = () =>{
    setCounter(Counter - 1)
  }

  return (
    <>
     <h1>React Course with Shubham</h1>
     <h2>Counter Value: {Counter}</h2>
     <button onClick={AddValue}>Add Value</button> {" "}
     <button onClick={RemoveValue}>Remove Value</button>
     <p>footer: {Counter}</p>
    </>
  )
}

export default App
