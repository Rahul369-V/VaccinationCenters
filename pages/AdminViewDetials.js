import React, { useState } from 'react'
import { useAuth } from '../context';
import { useRouter } from 'next/router';
import Header from '../components/Header';


function AdminViewDetials(props) {
    const {currentUserRole} = useAuth();
    
    const router = useRouter()
   // console.log(router.query)
    const urlParam = new URLSearchParams(router.query);
    // console.log(urlParam.keys());
    const urlkeys = urlParam.keys()
   
    var users=""
    
    for (var key of urlkeys){
            
            key = key.replace('[','')
            key = key.replace(']','')
            if((key.length)>0){
                users  = key.split(",")
            }else{
                users = []
            }
            
        }
    
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
        {(currentUserRole == "admin" && users.length>0) ?(users.map((cent,id)=>{
            
         
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
        })):( (currentUserRole == "admin")?(<h2 className='text-lg text-black'>👤No one is registered for the Vaccination slot</h2>):(<h2 className='text-lg text-black'>Only Admin can access the details❗❗❗</h2>)
            
            )}
       
       
            
        </tbody>
        </table>
        </div>
            
       

    </div>
  )
}

export default AdminViewDetials