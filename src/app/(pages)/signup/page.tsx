"use client";
import React from 'react'
import Signup from '@/components/Signup'
import Image from 'next/image';
import signUpBg from '@/../public/authBg.svg'


const SignupPage = () => {
  
  
  return (
    <div className={`w-full h-screen bg-authbg absolute flex z-0 items-center justify-center`}>
      <Image src={signUpBg} alt='Sign Up' fill  style={{objectFit: "cover" ,zIndex : -1}}/>
      <div className='w-1/3'>
        <Signup />
      </div>
    </div>
  )
}

export default SignupPage