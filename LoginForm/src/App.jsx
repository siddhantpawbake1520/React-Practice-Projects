import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './content/Login'
import Profile from './content/Profile'
function App() {
  return (
    <UserContextProvider>
        <h1 className="text-3xl font-bold underline ">
        Form using ContextProvider
        </h1>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App
