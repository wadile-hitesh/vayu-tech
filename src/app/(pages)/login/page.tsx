"use client";
import React from 'react'
import Login from '@/components/Login'
import Image from 'next/image';
import loginBg from '@/../public/authBg.svg'


const LoginPage = () => {
  
  
  return (
    <div className={`w-full h-screen bg-authbg absolute flex z-0 items-center justify-center`}>
      <Image src={loginBg} alt='Sign Up' fill  style={{objectFit: "cover" ,zIndex : -1}}/>
      <div className='w-1/3'>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage