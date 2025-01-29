import React from 'react'
import { BsXOctagonFill } from "react-icons/bs";

function page404() {
  return (
    <div className='bg-blue-500 text-white h-screen w-screen flex items-center justify-center text-5xl font-bold'>
        <div className='flex'>
            <BsXOctagonFill size={60} className='mr-2'/>
            Page Not Found
        </div>
    </div>
  )
}

export default page404