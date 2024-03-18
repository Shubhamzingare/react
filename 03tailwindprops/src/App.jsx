import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'


let myObj = {
  name: `Shubham`,
  age: 22,
  post: `Software Engineer`,
  address: {
    city: `Noida`,
    state: `UP`
  }
}

let myArray = [1,2,3,4,5,6,7,8,9,10]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl font-bold underline'>Vite with Tailwind</h1>
     < Card username="Shubham" myArray={myArray}/>
     < Card username="Shubham" post="Software Engineer"/>
     < Card/>

    </>
  )
}

export default App
