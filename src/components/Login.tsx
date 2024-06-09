"use client"
import appwriteService from '@/appwrite/authService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'


const Login = () => {
  const router = useRouter()

  const [userData, setUserData] = useState({
    email : '',
    password : ''
  })
  const handleChange = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData);
    try {
      const user = await appwriteService.loginUser(userData)
      if(!user){
        console.log("Error in login");
        return
      }

      router.replace('/profile')
    } catch (error) {
      
    }
  }
  return (
    <div className='flex items-center justify-center w-full z-50 text-authTextColor'>
      <div className='bg-white w-full max-w-3xl  rounded-2xl p-10'>
        <h2 className='text-bold text-2xl text-center leading-tight'>
          Login to your account
        </h2>
        <p className='text-base text-center mt-2'>
          Please enter your email and password to continue
        </p>

        <form onSubmit={handleChange} className='mt-8'>
          <div className='space-y-5'>
            <div>
              <label htmlFor='email' className='text-base font-medium'>Email Address</label>
              <div className='mt-2'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex h-10 w-full rounded-md border bg-[#F1F4F9] border-[#D8D8D8] px-3 py-2 focus:outline-authbg focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 '
                  id='email'
                  value={userData.email}
                  onChange={(e)=> setUserData({...userData, email : e.target.value})}
                  />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='text-base font-medium'>Password</label>
              <div className='mt-2'>
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='flex h-10 w-full rounded-md border bg-[#F1F4F9] border-[#D8D8D8] px-3 py-2 focus:outline-authbg focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 '
                  id='password'
                  value={userData.password}
                  onChange={(e)=> setUserData({...userData, password : e.target.value})}
                  />
              </div>
            </div>
          </div>
        <div className='my-4'>
          <button type='submit' className='bg-[#4880FF] w-full py-2 px-1 rounded-md text-white'>Sign In</button>
          
          <p className='my-2'>
            Don&apos;t have an account? 
            <Link href='/signup' className='text-[#4880FF]'>
              Create Account
            </Link>
          </p>
        
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login