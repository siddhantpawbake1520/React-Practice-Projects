import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../features/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
   <button
  onClick={logoutHandler}
  className="px-5 py-2 bg-red-500 text-white font-medium rounded-full 
             shadow-md hover:bg-red-600 transition-all duration-200"
>
  Logout
</button>

  )
}

export default LogoutBtn