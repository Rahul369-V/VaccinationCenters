import React from 'react'
import Header from '../components/Header'
import { Router,useRouter } from 'next/router'
import { database } from '../firebase'
import { collection, getDocs,doc,deleteDoc,updateDoc, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuth } from '../context'
import AdminViewDetials from './AdminViewDetials'
import Link from 'next/link'

export default function Admin(props) {
    const router = useRouter()
    const [vaccinationCenters,setVaccinationCenters] = useState([])
    const vaccinationCenterRef = collection(database,"vaccination_centers")
    const {currentUserRole} = useAuth();
    const {currentUser} = useAuth();
    // console.log(currentUser.email)
    useEffect(()=> {
        //make asyn function
        const getCenters = async() => {
 
            const data = await getDocs(vaccinationCenterRef)
            
            // setVaccinationCenters(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            var d = []
            data.forEach((doc) =>{
                
                if(doc.id != "MOCAvGpPGvsEYxX4Jlm7"){
                    d.push({id:doc.id,bookedDetails:doc.data().bookedDetails,centerName:doc.data().centerName,location:doc.data().location,slots:doc.data().slots,date:doc.data().date});
                    
                }
                
                // setVaccinationCenters({id:doc.id,centername:doc.data().centerName})
            })
            setVaccinationCenters(d)

        
    }
    getCenters()
        
        },[])

    const updateUser = async(id,slot) => {
        // if(currentUser.email)
        vaccinationCenters.forEach(async(data)=>{
            if(data.id === id && !( data.bookedDetails.includes(currentUser.email))){
                var arr =[]
                arr.push(currentUser.email)
                const newSlot = {slots:slot-1,bookedDetails:arr}
                const currentDoc = doc(database,"vaccination_centers",id)
                await updateDoc(currentDoc,newSlot)
            }else{
                alert("Sorry🥺 ,You already booked a slot")
            }
        })
        
    }

    const closeCenter = async(id) =>{
        if(id !="MOCAvGpPGvsEYxX4Jlm7"){
            const q = doc(database,"vaccination_centers",id)
            await deleteDoc(q).then(()=>router.push('/admin'))
        } 

    }
    const viewDetails = async(id) => {
        vaccinationCenters.forEach(async(data)=>{
            if(data.id == id){
                return data.bookedDetails
                // <AdminViewDetials P ={data.bookedDetails}/>
                // Router.push({
                //     pathname:'/AdminViewDetials',
                //     query:{
                //         result:JSON.stringify( data.bookedDetails)
                //     }
                // })
            }else{
                return("none")
                alert("Sorry🥺 ,Sorry no such centers available")
            }
        })
    }
  return (

        <div>
        <Header page={"admin"}/>
        {currentUserRole == "admin"?(<h3 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>Admin Panel✅</h3>):(<h3 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>User Panel 👤</h3>)}
        

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
                    Edit
                </th>
                {currentUserRole == "admin"?(<th  scope="col" className="px-6 py-3">
                   View Details📝
                    
                </th>):(null)}
                
            </tr>
        </thead>
        <tbody>
        {(currentUserRole == "admin") ?(vaccinationCenters.map((cent)=>{
            
         
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
                    <p onClick={()=>closeCenter(cent.id)} className=" font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">Close</p>
                </td>
                <td className="px-6 py-4 text-right">
                    {/* <p onClick={()=>viewDetails(cent.id)} className=" font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">View Details</p> */}
                    <Link className='font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline' href={{
                        pathname:'/AdminViewDetials',
                        query:JSON.stringify(cent.bookedDetails)
                    }}>View Details📝</Link>
                </td>
            </tr>
            )
        })):( vaccinationCenters.map((cent)=>{
            
         
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
                    {(cent.slots >0)?(
                        <p onClick={()=>updateUser(cent.id,cent.slots)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">Book a Slot✅</p>
                    ):(
                        <p onClick={()=>updateUser(cent.id,cent.slots)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">No Slots Available</p>
                    )}
                </td>
            </tr>
            )
        }))}
       
       
            
        </tbody>
        </table>
        </div>
            
       

    </div>
    

  
  )
}

// export default admin