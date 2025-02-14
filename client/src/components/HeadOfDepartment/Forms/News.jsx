import React, { useEffect, useState } from 'react';
import "../../../style/HeadOfDepartment/Update_News.css";
import NewsData from '../../../temp/News.json'; // Make sure News.json is correctly imported (might need a dynamic import)
import axios from 'axios'

function News() {
    const [newsData, setNewsData] = useState({
        title: "",
        description: "",
        note: "",
        date: ""
    });

    const handleOnChange = (e) => {
        e.preventDefault();
        setNewsData((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const addNews = async(e) => {
        e.preventDefault
        console.log("Data to be sent: ", newsData);
        try{
            await axios.post("http://localhost:3000/News", newsData);
            const server_response = await axios.post("http://localhost:3300/bdas/addnews", newsData);
        }catch(err){
            console.log("Error Response: ", err)
        }
    };

    return (
        <div className='flex flex-col p-5 justify-items-center items-center'>
            <div className='items-center text-center h-auto rounded-xl pb-40 px-20' style={{width: "fit-content"}}>
                <h1 className='font-bold mt-10 text-2xl text-slate-400'>Add News</h1>

                <div className='form_inputs mt-8 space-y-10 justify-items-center'>
                    <div>
                        <label htmlFor="" className='font-semibold'>Title - </label>
                        <input type="text" name="title" placeholder='e.g Missing Document' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400'/>
                    </div>
                    <div className='space-y-2 items-center text-center justify-center' style={{width: "fit-content"}}>
                        <label htmlFor="" className='font-semibold block mr-80'>Description - </label>
                        <textarea name="description" onChange={handleOnChange} className='border-1 border-blue-200 pl-5 py-1 rounded-sm w-[25em] placeholder:text-gray-400 h-[10em]' placeholder='Give a brief description of the news'/>
                        <p className='text-right'>value/500</p>
                    </div>

                    <div>
                        <label htmlFor="" className='font-semibold'>Note - </label>
                        <input type="text" name="note" placeholder='e.g deadline on Monday' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400'/>
                    </div>

                    <button className='bg-blue-500 px-30 py-2 text-white font-bold rounded-md hover:bg-blue-800' onClick={addNews}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default News;
