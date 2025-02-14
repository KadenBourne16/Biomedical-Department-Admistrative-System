import React from 'react'
import { FiCheck } from "react-icons/fi";
import '../style/login_success.css'


function login_success() {
  return (
    <div className='h-screen w-screen flex items-center justify-center success_background'>
        <div className='w-fit h-20 grid grid-cols-3 shadow-lg shadow-black rounded-md text-center justify-center bg-white'>
            <div className='flex items-center justify-center bg-blue-800 rounded-xl shadow-lg shadow-black'>
                <FiCheck size={70} className='h-1/2 w-1/2 text-white font-bold'/>
            </div>
            <div className='col-span-2 m-5'>
                <h1 className='text-blue-500 font-semibold font-mono text-2xl'>Successfully Registered</h1>
            </div>
        </div>
    </div>
  )
}

export default login_success