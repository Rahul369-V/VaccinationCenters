import React, { useEffect, useState } from 'react'
import { Router,useRouter } from 'next/router'
import { useAuth } from '../context';
export default function LoginPage() {
    const router = useRouter();

    const [loginEmail,setLoginEmail] = useState() ;
    const [loginPass,setLoginPass] = useState() ;
    const [isSubmitted,setIsSubmitted] = useState(false) ;
    //const [role,setRole] = useState("User");
    

    const {loginUser} = useAuth();
    const {currentUserRole} = useAuth();

  

  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Flowbite    
    </a> */}
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login🔐
            </h1>
            <form class="space-y-4 md:space-y-6" action="" onSubmit={async e => {
                e.preventDefault();
                
                setIsSubmitted(true)
                loginUser(loginEmail,loginPass)
                .then((res)=>{
                    console.log(res)
                    
                   
                    
                        router.push(`/admin`)
                    
                    
                
                
                })
                .catch((err)=>alert(err.message)).finally(()=>setIsSubmitted(false))
                // console.log(registerEmail,registerPassword,role)
              }}>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input value={loginPass} onChange={(e) => setLoginPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
     
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-b">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a onClick={()=>router.push(`/signup`)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    </div>
</div>
  );
}

