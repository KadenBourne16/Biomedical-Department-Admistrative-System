// src/LoginForm.js
import React from 'react';
import {Link} from 'react-router-dom'
import "../index.css"

const LoginForm = () => {
    return (
      <div className='signupbackground'>
         <div className='Divider flex min-h-screen'>
            <div className="hidden md:flex md:w-full justify-center items-center p-10">
                    <h1 className="text-white text-4xl font-bold">Biomedical Depar tment Administrative System</h1>
                </div>
         </div>
         <div className='right-side'>
            <div className='form_container'>
                <h1 className='LOGIN'>LOGIN</h1>
                <div className='department_logo flex justify-right'>
                    <h1>Logo</h1>
                    <img src="" alt="" />
                </div>
                <div className='form_container_info mt-16 grid grid-cols-3'>
                    <div className=''>

                    </div>
                    <div className='col-span-2 px-20'>
                        <label htmlFor="" className='text-left block font-bold'>E-mail</label>
                        <input type="email" className='shadow-lg rounded w-full border-2 py-2 px-3' />
                        <br />
                        <label htmlFor="" className='text-left block mt-20 font-bold'>Password</label>
                        <input type="password" className='shadow-lg rounded w-full border-2 py-2 px-3' />
                        <button className='bg-blue-400 mt-20 w-1/2 h-10 rounded-md font-bold text-white hover:bg-blue-900 hover:text-white'> Login</button>
                    
                        <div className='pt-5'>
                            <h3 className='inline mr-4'>Don't have account?</h3>
                            <Link to="/signup" className="text-blue-400 font-bold text-lg">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    );
};

export default LoginForm;