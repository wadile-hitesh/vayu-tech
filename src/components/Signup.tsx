"use client"
import Link from 'next/link'
import React from 'react'


const Signup = () => {
  
  return (
    <div className='flex items-center justify-center w-full z-50 text-authTextColor'>
      <div className='bg-white w-full rounded-2xl p-10'>
        <h2 className='text-bold text-2xl text-center leading-tight'>
          Create an account
        </h2>
        <p className='text-base text-center mt-2'>
          Create an account to continue
        </p>

        <form className='mt-8'>
          <div className='space-y-5'>
            <div>
              <label htmlFor='email' className='text-base font-medium'>Email Address</label>
              <div className='mt-2'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex h-10 w-full rounded-md border bg-[#F1F4F9] border-[#D8D8D8] px-3 py-2 focus:outline-authbg focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 '
                  id='email'
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
                  />
              </div>
            </div>
          </div>
        </form>
        <div className='my-4'>
          <button className='bg-[#4880FF] w-full py-2 px-1 rounded-md text-white'>Sign Up</button>
          
          <p className='my-2'>
            Already have an account? 
            <Link href='/login' className='text-[#4880FF]'>
              Login
            </Link>
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default Signup