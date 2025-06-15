import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue=()=>{ 
    setCount(count+1)
  }
  const remvalue=()=>{ 
    setCount(count-1)
  }
  return (
    <>
    <h1>CounterApp</h1>
    <h2>Value:{count}</h2>
    <button onClick={addvalue}>Increament Value</button>
    <button onClick={remvalue}>Decrement Value</button>
    <p>Created by Siddhant!</p>
    </>
  )
}

export default App
