import React from 'react'
import { Router,useRouter } from 'next/router'
import { useAuth } from '../context';


// import firebase from "firebase/app"
// import 'firebase/auth';
const styleTag  = {
    headerWrapper: `sticky top-0 shadow-md mb-2 p-2 w-full bg-white z-50`,
    inlineWrapper: `flex w-full font-semibold text-sm md:text-lg justify-between items-center max-w-6xl py-1 mx-auto`,
    button : `cursor-pointer m-1 rounded-md border p-1 text-center border-black`
}
function Header(props) {
    const router = useRouter();
    const {currentUserRole} = useAuth();

    
  return (
    
    <div className={styleTag.headerWrapper}>
        <div className={styleTag.inlineWrapper}>
            <p className='flex-1'>Covid Vaccination</p>
            
            <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'>
                    {(() => {
                if (props.page == "home") {
                return (
                    <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'>
              
                        <div className={styleTag.button}>
                            <p onClick={() => router.push(`/login`)}>Login</p>
                        </div>
                        <div className={styleTag.button}>
                            <p  onClick={()=>router.push(`/signup`)} >Signup</p>
                        </div>
     
                    </div>
                )
                } else if (props.page == "admin") {
                return (
                    <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'>
                        {(currentUserRole == "admin")?

                        (  <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'>
                             <div className={styleTag.button}>
                                <p  onClick={()=>router.push(`/AddCenters`)} >Add Centers➕</p>
                            </div>
                            <div className={styleTag.button}>
                                <p  onClick={()=>router.push(`/signup`)} >Logout</p>
                            </div>
                            </div>
                        )
                        :(  <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'> 
                               
                                <div className={styleTag.button}>
                                    <p  onClick={()=>router.push(`/signup`)} >Logout</p>
                                </div>
                            </div>
                        )}
                     
                    </div>
                    
                )
                } else {
                return (
                    <div className='flex-1 flex items-center flex-row justify-end w-28 h-10 cursor-pointer'>
              
                        <div className={styleTag.button}>
                            <p onClick={()=>router.push(`/login`)}>Logout    </p>
                        </div>
            

                    </div>
                )
                }
            })()}
      </div>
                
             
                    
                
            



        </div>


    </div>
  )
}

export default Header