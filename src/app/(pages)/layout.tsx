"use client"
import appwriteService from '@/appwrite/authService';
import { useAppDispatch } from '@/lib/hooks';
import React, { useEffect } from 'react'
import { setAuthStatus } from '@/lib/features/auth/authSlice';

const ProtectedLayout = ({children} : Readonly<{
  children: React.ReactNode;
}>) => {

  const dispatch = useAppDispatch()

  useEffect(()=>{
    getUser();
  } )

  const getUser = async () => {
    try {
      const user = await appwriteService.getCurrentUser();
      if(user){
        dispatch(setAuthStatus(true));
      }
      else{
        dispatch(setAuthStatus(false));
      }
    } catch (error) {
      console.log("Error: While Getting User", error);
    }

  }

  return (
    <div>{children}</div>
  )
}

export default ProtectedLayout