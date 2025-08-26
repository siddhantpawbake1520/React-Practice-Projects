import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../features/authSlice.jsx'
import {Button, Input, Logo} from './index.jsx'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
  <div className="mx-auto w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
    
    {/* Logo */}
    <div className="mb-4 flex justify-center">
      <span className="inline-block w-full max-w-[100px]">
        <Logo width="100%" />
      </span>
    </div>

    {/* Title */}
    <h2 className="text-center text-3xl font-extrabold text-gray-800">
      Sign up to create account
    </h2>

    {/* Switch to login */}
    <p className="mt-2 text-center text-sm text-gray-600">
      Already have an account?{" "}
      <Link
        to="/login"
        className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        Sign In
      </Link>
    </p>

    {/* Error Message */}
    {error && (
      <p className="text-red-500 mt-6 text-center text-sm font-medium">
        {error}
      </p>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit(create)} className="mt-6">
      <div className="space-y-5">
        <Input
          label="Full Name:"
          placeholder="Enter your full name"
          {...register("name", { required: true })}
        />
        <Input
          label="Email:"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be valid",
            },
          })}
        />
        <Input
          label="Password:"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Create Account
        </Button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Signup