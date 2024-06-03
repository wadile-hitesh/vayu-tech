"use client"

import { AppStore, store } from '@/lib/store'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({children} : {children : React.ReactNode}) => {
  const storeRef = useRef<AppStore>()
  if(!storeRef.current){
    storeRef.current = store()
  }
  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}

export default StoreProvider