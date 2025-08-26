import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../features/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(setError(error?.message || "Something went wrong"))
        }
    }

  return (
  <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
    <div className="mx-auto w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
      
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl font-extrabold text-white tracking-wide">
        Welcome Back 👋
      </h2>
      <p className="mt-2 text-center text-base text-gray-200">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-yellow-300 hover:text-yellow-400 transition-colors"
        >
          Sign Up
        </Link>
      </p>

      {/* Error Message */}
      {error && (
        <p className="text-red-400 mt-6 text-center font-medium">{error}</p>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(login)}
        className="mt-8 space-y-5"
      >
        <Input
          label="Email"
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
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 shadow-lg shadow-indigo-500/30 transition-all duration-300"
        >
          Sign in
        </Button>
      </form>
    </div>
  </div>
);
}

export default Login