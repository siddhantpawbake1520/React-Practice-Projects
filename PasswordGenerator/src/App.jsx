import { useCallback, useState,useEffect ,useRef } from 'react'
import './App.css'

function App() {
  const [pass, Setpass] = useState("")
  const [length,setlength]=useState(0)
  const [charallow,setchar]=useState(false)
  const [numallow,setnumallow]=useState(false)
  const passref=useRef(null)
  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numallow) {
        str+="0123456789"
    }
    if (charallow) {
      str+="!@#$%^&*()~`_-=+"
    }
    for (let i = 0; i <length; i++) {
      let char=Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char)
      
    }
    Setpass(pass)
  },[length,numallow,charallow,Setpass])
  const copypasstoclip=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(()=>{
  PasswordGenerator()
},[length,numallow,charallow,PasswordGenerator])
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-gray-700">
  <div className="w-full max-w-md shadow-lg px-4 py-8 text-blue-200 bg-gray-800 rounded-lg text-center">
    <h1>Password Generator</h1>
    <div className="flex shadow rounded-lg my-3 overflow-hidden mb-4">
      <input
        type="text"
        value={pass}
        className="outline-none bg-amber-50 text-black w-full py-1 py-3"
        placeholder=" Password!"
        readOnly
        ref={passref}></input>
    
    <button onClick={copypasstoclip} className="outline-none bg-gray-700 rounded-2xl text-white px-3 py-1 shrink-0">Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className='flex items-center gap-x-2'>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) =>{setlength(e.target.value)}}
      ></input>
      <label>Length:{length}</label>
      </div>
      <input
        type="checkbox"
        defaultChecked={numallow}
        id="numberInput"
        onChange={()=>{
          setnumallow((prev)=>!prev);
        }}>
        </input>
        <label htmlFor="numberInput">Numbers</label>
    
    <div className='="flex items-center gap-x-2'>
      <input
      type="checkbox"
      defaultChecked={charallow}
      id="characterinput"
      onChange={()=>{
        setchar((prev) =>!prev);
      }}></input>
      <label htmlFor="characterInput"> Characters</label>
    </div>
    </div>
  </div>
</div>
</>

  )
}

export default App