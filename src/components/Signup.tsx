"use client"
import appwriteService from '@/appwrite/authService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'


const Signup = () => {
  const router = useRouter()
  const [userData, setUserData] = useState({
    email : '',
    password : '',
    name : ''
  })

  const handleChange = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData);
    try {
      const user = await appwriteService.createUserAccount(userData)

      if(!user){
        console.log("Error in signup");
        return
      }
      setUserData({email : '', password : '', name : ''})
      router.replace('/profile')
    } catch (error) {
      console.log("Error in signup : ", error);
      
    }
  }
  return (
    <div className='flex items-center justify-center w-full z-50 text-authTextColor'>
      <div className='bg-white w-full rounded-2xl p-10'>
        <h2 className='text-bold text-2xl text-center leading-tight'>
          Create an account
        </h2>
        <p className='text-base text-center mt-2'>
          Create an account to continue
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
            <div>
              <label htmlFor='name' className='text-base font-medium'>Name</label>
              <div className='mt-2'>
                <input
                  type='name'
                  placeholder='Enter your name'
                  className='flex h-10 w-full rounded-md border bg-[#F1F4F9] border-[#D8D8D8] px-3 py-2 focus:outline-authbg focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                  id='name'
                  value={userData.name}
                  onChange={(e)=> setUserData({...userData, name : e.target.value})}
                  />
              </div>
            </div>
          </div>
        <div className='my-4'>
          <button type='submit' className='bg-[#4880FF] w-full py-2 px-1 rounded-md text-white'>Sign Up</button>
          
          <div className='my-2 flex justify-center'>
            <p>
              Already have an account? 
            </p>
            <Link href='/login' className='text-[#4880FF]'>
              Login
            </Link>
          </div>
        
        </div>
        </form>
      </div>
    </div>
  )
}

export default Signup