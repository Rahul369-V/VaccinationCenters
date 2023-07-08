import React, { useState } from 'react'
import { useAuth } from '../context';
import { Router,useRouter } from 'next/router'

function AddCenters() {

    const [centerName, setCenterName] = useState()
    const [location, setLocation] = useState()
    const [slots, setSlots] = useState(10)
    const [date, setDate] = useState()

    const {currentUserRole} = useAuth();
    const router = useRouter()

  return (
    <div>
        {
            (currentUserRole == "admin") ?(
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Vaccination Centers🏥
          </h1>
          <form class="space-y-4 md:space-y-6" action="" onSubmit={async e => {
              e.preventDefault();
              
          
              
              // console.log(registerEmail,registerPassword,role)
            }}>
              <div>
                  <label for="center" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input id='center' value={centerName} onChange={(e) => setCenterName(e.target.value)} type="text" name="centerName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hospital name" required/>
              </div>
              <div>
                  <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" name="location" id='location' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hospital name" required/>
              </div>
              <div>
                  <label for="slots" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input value={slots} onChange={(e) => setSlots(e.target.value)} type="number" name="slots" id='slots' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hospital name" required/>
              </div>
            
              {/* <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" required/>
</div> */}
   
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-b">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a onClick={()=>router.push(`/signup`)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
          </form>
      </div>
  </div>
</div>
            ):
            (
                <div>"helo"</div>
            )
        }


    </div>
 
    // <div>AddCenters</div>
  )
}

export default AddCenters