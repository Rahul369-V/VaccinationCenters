import React, { createContext,useContext,useEffect,useState } from 'react'
import { auth, database } from '../firebase'
import { collection, getDocs, addDoc, query, where,doc,getDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import { Router,useRouter } from 'next/router'


const userCollectionRef = collection(database,"users")

const AuthContext = createContext({ //this is optional just for auto completion
    currentUser:null,
    currentUserRole :"user",
    registerUser: () => Promise,
    loginUser: () => Promise,
    logout: ()=> Promise
})

export default function AuthContextProvider( {children}){
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserRole, setCurrentUserRole] = useState("user")
    const value = () => {
        currentUser
    }

    useEffect(()=>{//whenever component mounts and unmounts
        const unsubscribe = onAuthStateChanged(auth,user =>{
            setCurrentUser(user)
            
            if(user !== null){
                set(user.email)
                
            }else{
                router.push('/')
            }
            
        })
        return () => {
            unsubscribe()
        }
       
    },[])

    const set = async(email) =>{
        const data = await getDocs(userCollectionRef)
        //setCurrentUserRole(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        data.forEach((doc)=>{
            
            if(doc.data().email == email){
                setCurrentUserRole(doc.data().role)
            }
        })
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

    function logout(){
        return signOut(auth)
    }

    return <AuthContext.Provider value={{currentUser,registerUser,loginUser,currentUserRole,logout}}>{children}</AuthContext.Provider>
     
}


const useAuth = () => useContext(AuthContext)

export {useAuth}