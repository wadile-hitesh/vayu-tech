"use client"
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import React from 'react'

const page = () => {
  return (
    <div className='bg-mainbg w-full h-screen'>
      <Navbar />
      <Profile />
    </div>
  )
}

export default page