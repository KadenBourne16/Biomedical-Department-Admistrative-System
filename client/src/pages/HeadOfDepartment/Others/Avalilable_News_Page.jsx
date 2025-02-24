import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AvailableNews() {
  return (
    <div className=''>
        <div className='bg-blue-500 h-10 p-2' >
            <Link
            to={"/hod/dashboard/updatenews"}
            >
                <FaHome className='text-2xl text-white'/> 
            </Link>
        </div>
        <div className='flex flex-col items-center h-screen mt-5'>
            <h1 className='text-blue-500 text-2xl font-bold'>Available News</h1>
        </div>
    </div>
  )
}

export default AvailableNews