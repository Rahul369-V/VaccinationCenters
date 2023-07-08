import React, { useState } from 'react'
import { useAuth } from '../context';
import { useRouter } from 'next/router';
import Header from '../components/Header';


function AdminViewDetials(props) {
    const {currentUserRole} = useAuth();
    const router = useRouter()
   // console.log(router.query)
    const urlParam = new URLSearchParams(router.query);
    // console.log(urlParam);
    const keys = urlParam.keys()
    const users = []
    for (var key of keys){
        
       console.log(typeof(key))
     
        users.push(key)
    }
    console.log(users)
    // a.forEach(element => {console.log(element)
        
    // });
    // console.log(router.query)
    ///console.log(JSON.parse(JSON.stringify(router.query)))
  return (
    <div>
        <Header page={"admin"}/>
        <h3 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>Vaccination booked details💉💉</h3>
        

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Vaccination Appointment status💉
                </th>
                <th scope="col" className="px-6 py-3">
                    EmailID👤
                </th>
            
            </tr>
        </thead>
        <tbody>
        {(currentUserRole == "admin") ?(users.map((cent,id)=>{
            
         
            return(
                <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Vaccination booked✅
                   
                </th>
                
               
                <td className="px-6 py-4">
                {cent}
                </td>
              
            </tr>
            )
        })):( <div>

            <h3>Only Admin can ascess❗❗</h3>

        </div>)}
       
       
            
        </tbody>
        </table>
        </div>
            
       

    </div>
  )
}

export default AdminViewDetials