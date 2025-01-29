import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdCastForEducation } from 'react-icons/md';
import "../index.css"
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
      <div className="flex justify-center items-center h-screen bg-white p-4 hover:cursor-pointer hover:bg-stone-100 transition-all duration-300 ease-in-out left-side">
        <div className="text-center hover:text-blue">
            <Link
                to="/signup/student"
            >
                <AiOutlineUser size={100} className="text-black transition-all duration-300 ease-in-out hover:scale-125 hover:text-blue-500" />
                <h1 className="text-lg mt-4 font-semibold text-black transition-all duration-300 ease-in-out hover:scale-125 hover:text-blue-500">Student</h1>
            </Link>
         
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-500 hover:shadow-lg p-4 hover:cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
        <div className="text-center">
            <Link
                to="/signup/lecturer"
                className='w-screen h-screen'
            >
                <MdCastForEducation size={100} className="text-white transition-all duration-300 ease-in-out hover:scale-125" />
                <h1 className="text-lg text-white mt-4 font-semibold transition-all duration-300 ease-in-out hover:scale-125">Lecturer</h1>
             </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
