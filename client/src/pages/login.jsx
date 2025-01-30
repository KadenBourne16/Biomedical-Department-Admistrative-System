// src/LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const LoginForm = () => {
    return (    
        <div className='flex min-h-screen items-center justify-center bg-gray-100'>
            <div>
                <h1>Biomedical Department Administrative System</h1>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-8 w-96'>
                <h1 className='text-2xl font-bold text-center mb-6'>Login</h1>
                <div className='flex justify-center mb-4'>
                    <h1 className='text-lg'></h1>
                    {/* You can add an image source here */}
                    <img src="" alt="Logo" className="ml-2" />
                </div>
                <form>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block font-bold'>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className='shadow-lg rounded w-full border-2 py-2 px-3'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block font-bold'>Password</label>
                        <input
                            type="password"
                            id="password"
                            className='shadow-lg rounded w-full border-2 py-2 px-3'
                            required
                        />
                    </div>
                    <button className='bg-blue-400 w-full h-10 rounded-md font-bold text-white hover:bg-blue-900'>
                        Login
                    </button>
                </form>
                <div className='pt-5 text-center'>
                    <h3 className='inline mr-2'>Don't have an account?</h3>
                    <Link to="/signup" className="text-blue-400 font-bold">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;