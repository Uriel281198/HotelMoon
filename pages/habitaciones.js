import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
export default function habitacion() {


  const router = useRouter();

  useEffect(() => {
    console.log(router)
  },[])

  
  return (
    <div>
      <p>router</p>
    </div>
  )
}