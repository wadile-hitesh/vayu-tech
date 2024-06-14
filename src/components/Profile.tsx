
import { Camera } from 'lucide-react'
import React from 'react'

function Profile() {
  return (
    <div className='w-full h-screen'>
      <div className='text-black mx-20 my-10'>
        <h1>Profile</h1>

        <div className='bg-white w-full rounded-lg shadow-sm py-4'>
          <div className='flex w-full items-center flex-col'>
            <div className='bg-slate-300 rounded-full w-24 h-24 flex items-center justify-center'>
            <Camera color='black' size={30}/>
            </div>
            <p className='py-4'>Upload Photo</p>
          </div>
        </div>

        
      </div>

    </div>
  )
}

export default Profile