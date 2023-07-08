import React from 'react'
import Header from '../components/Header'

import { database } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function Admin(props) {
    const [vaccinationCenters,setVaccinationCenters] = useState([])
    const vaccinationCenterRef = collection(database,"vaccination_centers")

    useEffect(()=> {
        //make asyn function
        const getCenters = async() => {
 
            const data = await getDocs(vaccinationCenterRef)
            console.log(data.docs[0].data())
            setVaccinationCenters(data.docs.map((doc)=>({...doc.data(),id:doc.id})))


        
    }
    getCenters()
        
        },[])
  return (
    <div>
        <Header page={"admin"}/>
        <h3 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>Admin Panel✅</h3>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Hospital Name🏥
                </th>
                <th scope="col" className="px-6 py-3">
                    Date📅
                </th>
                <th scope="col" className="px-6 py-3">
                    location📌
                </th>
                <th scope="col" className="px-6 py-3">
                    Slots💉
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
       
        {vaccinationCenters.map((cent)=>{
            
         
            return(
                <tr key={cent.centerName} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {cent.centerName}
                   
                </th>
                
                <td className="px-6 py-4">
        
                {new Date((new Date(1970,0,1).setSeconds(cent.date['seconds']))).toDateString()}
                </td>
                <td className="px-6 py-4">
                {cent.location}
                </td>
                <td className="px-6 py-4">
                {cent.slots}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Close</a>
                </td>
            </tr>
            )
        })}
            
        </tbody>
        </table>
        </div>
            
       

    </div>
  
  )
}

// export default admin