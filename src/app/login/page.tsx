'use client'

import { useWixClient } from "@/hooks/useWixclient";
import { useState } from "react"


enum Mode {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VARIFICATION = 'EMAIL_VARIFICATION'
}


const LoginPage = () => {

  const [mode, setMode] = useState(Mode.LOGIN);

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailCode, setemailCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')


  const formTitle = mode===Mode.LOGIN ? 'Log in' : mode===Mode.REGISTER ? 'Register' : mode===Mode.RESET_PASSWORD ? 'Reset Your Password' : 'Verify Your Email'
  const buttonTitle = mode===Mode.LOGIN ? 'Login' : mode===Mode.REGISTER ? 'Register' : mode===Mode.RESET_PASSWORD ? 'Reset' : 'Verify'


  const wixClient = useWixClient();
    return (
      <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center'>
        <form className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold">{formTitle}</h1>
            {mode===Mode.REGISTER ? (
               <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">Username</label>
                  <input type='text' name="username" placeholder="john" className="ring-2 ring-gray-300 rounded-md p-4"></input>
               </div>
            ) : null}
            {
              mode !== Mode.EMAIL_VARIFICATION ? (
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">E-mail</label>
                  <input type='email' name="email" placeholder="john@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4"></input>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">Verification Code</label>
                  <input type='text' name="emailCode" placeholder="Code" className="ring-2 ring-gray-300 rounded-md p-4"></input>
                </div>
              )
            }
            {
              mode === Mode.LOGIN || mode === Mode.REGISTER ? (
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-700">Password</label>
                  <input type='password' name="password" placeholder="Enter your password" className="ring-2 ring-gray-300 rounded-md p-4"></input>
                </div>
              ) : null}
              { mode === Mode.LOGIN && <div className="text-sm underline cursor-pointer" onClick={() => setMode(Mode.RESET_PASSWORD)}>Forgot Password</div> }
              <button className="bg-SHOP text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isLoading}>{isLoading ? 'Loading...' : buttonTitle}</button>
              {error && <div className="text-red-600">{error}</div>}
              {mode===Mode.LOGIN && (
                <div className="text-sm underline cursor-pointer" onClick={() => setMode(Mode.REGISTER)}>{"Don't"} have an account?</div>
              )}
              {mode===Mode.REGISTER && (
                <div className="text-sm underline cursor-pointer" onClick={() => setMode(Mode.LOGIN)}>Have an account?</div>
              )}
              {mode===Mode.RESET_PASSWORD && (
                <div className="text-sm underline cursor-pointer" onClick={() => setMode(Mode.LOGIN)}>Go back to Login</div>
              )}
              {message && <div className="text-green-600 text-sm">{message}</div>}
        </form>
      </div>
    )
  }
  
export default LoginPage