"use client"
import appwriteService from '@/appwrite/authService'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Home() {
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      const isLoggedIn = await appwriteService.isUserLoggedIn()
      if (!isLoggedIn) {
        router.replace('/login')
      }
      else{
        router.replace('/')
      }
    })()
  },)
  return (
    <div className='bg-mainbg w-full h-screen'>
      <Navbar />
    </div>
  )
}

export default Home