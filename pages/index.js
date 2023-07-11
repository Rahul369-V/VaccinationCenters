import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import { Router, useRouter } from 'next/router'

//import AuthContextProvider from '../context/AuthContext'

export default function Home() {

  const router = useRouter()
  return (
    

    <div className= 'mainBlock'>
      <Head>
        <title>Vaccination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    {/* Header */}
    <Header page={"home"}/>
    <div className='content'>
      <div className='container'>
        <div onClick={()=>router.push('/login')} className='mainButton'>Login To Continue</div>
        <p className='description'>“Most anti-vaccine books claim that all shots are bad, the diseases aren’t really anything to fear, and as long as you live a natural and healthy lifestyle, you don’t have to worry. I think this is a very irresponsible approach to the vaccine issue. Vaccines are beneficial in ridding our population of both serious and non-serious diseases.”</p>
      </div>
    </div>
    
    
    {/* <div className="bg-red-600"><h2 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>Login to Continue⏩⏩</h2></div> */}
    
  </div>
  


      
  )
}
