// src/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../index.css";
import axios from 'axios';

const LoginForm = () => {
    const [errors, setErrors] = useState({});
    const [logindata, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("DATA TO BE SENT", logindata);
        try {
            const res = await axios.post('http://localhost:3300/bdas/loginstudent', logindata);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center p-4 bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-sm'>
                <h1 className='text-2xl font-bold text-center mb-6'>Login</h1>
                <div className='flex justify-center mb-4'>
                   <h1 className='font-bold text-2xl text-blue-500'>B-D-A-S</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block font-bold'>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            className='shadow-lg rounded w-full border-2 py-2 px-3'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block font-bold'>Password</label>
                        <input
                            type="password"
                            name="password"
                            className='shadow-lg rounded w-full border-2 py-2 px-3'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className='bg-blue-400 w-full h-10 rounded-md font-bold text-white hover:bg-blue-900'>
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