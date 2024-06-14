import appwriteService from '@/appwrite/authService'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function Navbar() {
  const [user,setUser] = useState({
    name : ''
  })
  useEffect(() => {
    ;(async () => {
      const user = await appwriteService.getCurrentUser()
      if(user){
        setUser(user)
      }
    })()
  },[])

  return (
    <div className='bg-white'>
      <div className='flex px-4 py-2 mx-8 justify-between shadow-sm'>
        <div>
          <input
            placeholder='Search'
            type='search'
            className='w-full px-4 py-2 ' 
          />
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <Link href='/profile'>
              <CircleUserRound color='grey' size={40}/>
            </Link>       
          </div>
          <div className='px-3 '>
            <p className='text-black'>{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar