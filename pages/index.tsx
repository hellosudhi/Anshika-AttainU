import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'
import { Context } from '../components/StateProvider'




const Home: NextPage = () => {
  const context = useContext(Context)
  useEffect(() => {
   
    localStorage.getItem("username") === " " ? Router.push("/login") : Router.push("/product")
  }, [])
  
  return (
    
      <div>
        <Head>
          <title>Login</title>
          <meta name="description" content="Login" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
      </div>
   
  )
}

export default Home;

