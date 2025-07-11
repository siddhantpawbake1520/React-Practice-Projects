import React from 'react'
import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'

function Login() {
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')
    const {setUser}  = useContext(UserContext)
    console.log("UserContext value:", useContext(UserContext))

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='username'></input>

        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='password'></input>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
export default Login