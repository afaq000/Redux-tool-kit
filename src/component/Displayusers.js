"use Client"
import React from 'react'
import { useSelector } from 'react-redux'

function Displayusers() {

  const userdata=useSelector((data=>data.users))
  return (
    <div className='w-full mt-5 border-[2px] border-green-500 h-[300px]'>
      <p className='text-center bg-yellow-500 py-2 text-white text-lg font-bold'>User List</p>
    </div>
  )
}

export default Displayusers
