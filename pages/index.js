import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

//import AuthContextProvider from '../context/AuthContext'

export default function Home() {

  
  return (
    

    <div className= 'mainBlock'>
      <Head>
        <title>Vaccination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    {/* Header */}
    <Header page={"home"}/>
    {/* <div className="bg-red-600"><h2 className='text-lg italic leading-tight tracking-tight shadow-sm md:text-2xl dark:text-black'>Login to Continue⏩⏩</h2></div> */}
    
  </div>
  


      
  )
}
