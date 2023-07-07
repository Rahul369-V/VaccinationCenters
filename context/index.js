import React, { createContext,useContext,useEffect,useState } from 'react'
import { auth, database } from '../firebase'
import { collection, getDocs, addDoc, query, where,doc,getDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const userCollectionRef = collection(database,"users")

const AuthContext = createContext({
    currentUser:null,
    currentUserRole :"user",
    registerUser: () => Promise,
    loginUser: () => Promise
})

export default function AuthContextProvider( {children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserRole, setCurrentUserRole] = useState("user")
    const value = () => {
        currentUser
    }
    function registerUser(email,password,role){
        return createUserWithEmailAndPassword(auth,email,password,role)
        .then(async ()=>{
            //create the user data in firestore
            await addDoc(userCollectionRef,{email:email,role:role})
        })
    }

    function loginUser(email,password){
        
       
   
            

        return signInWithEmailAndPassword(auth ,email,password)
        .then(async()=>
        {   const data = await getDocs(userCollectionRef)
            //setCurrentUserRole(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            data.forEach((doc)=>{
                
                if(doc.data().email == email){
                    setCurrentUserRole(doc.data().role)
                }
            })
              
        })
        
    
        
    }

    return <AuthContext.Provider value={{currentUser,registerUser,loginUser,currentUserRole}}>{children}</AuthContext.Provider>
     
}


const useAuth = () => useContext(AuthContext)

export {useAuth}