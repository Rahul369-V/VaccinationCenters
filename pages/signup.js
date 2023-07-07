import React, { useState } from 'react'
import { Router,useRouter } from 'next/router'
import { useAuth } from '../context';

export default function Signup() {
  const router = useRouter()
  
  const [registerEmail,setRegisterEmail] = useState() ;
  const [registerPassword,setRegisterPassword] = useState() ;
  // const [loginEmail,setLoginEmail] = useState() ;
  // const [loginPass,setLoginPass] = useState() ;
  const [isSubmitted,setIsSubmitted] = useState(false) ;
  const [role,setRole] = useState("User");
  
  const register = async () => {
        
  }

const {registerUser} = useAuth();
  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite    
      </a> */}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={async e => {
                e.preventDefault();
                setIsSubmitted(true)
                registerUser(registerEmail,registerPassword,role)
                .then((res)=>console.log(res))
                .catch((err)=>alert(err.message)).finally(()=>setIsSubmitted(false))
                // console.log(registerEmail,registerPassword,role)
              }}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                
                  {/*  user Role */}
                  <div class="relative">
                    <label for="userRole" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} id = "userRole" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                      <option>user</option>
                      <option>admin</option>

                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
               
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-b">Register a account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a onClick={()=>router.push(`/login`)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
  )
}

