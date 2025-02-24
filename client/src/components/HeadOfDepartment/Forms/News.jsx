import React, { useState, useEffect } from 'react';
import "../../../style/HeadOfDepartment/Update_News.css";
import axios from 'axios';
import {Link} from 'react-router-dom'

function News() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769)
  const [newsData, setNewsData] = useState({
    title: "",
    description: "",
    note: "",
    date: new Date()
  });
    
  useEffect(() => {
    const resizer = () => {
      setIsMobile(window.innerWidth < 769);
    }
    window.addEventListener('resize', resizer);
    return(
      window.removeEventListener('resize', resizer)
    )
  }, [isMobile])

  const handleOnChange = (e) => {
    setNewsData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const addNews = async (e) => {
    e.preventDefault();
    console.log("Data to be sent: ", newsData);
    try {
      await axios.post("http://localhost:3000/News", newsData);
      const server_response = await axios.post("http://localhost:3300/bdas/addnews", newsData);
    } catch (err) {
      console.log("Error Response: ", err)
    }
  };

  return (
    <div>
      {isMobile ? (
          <div className='h-screen flex flex-col items-center'>
              <div className='items-center text-center h-auto rounded-xl pb-40' style={{ width: "fit-content" }}>
              <h1 className='font-bold mt-10 text-2xl text-slate-400'>Add News</h1>
              <div className='form_inputs mt-8 space-y-10 justify-items-center'>
                <div>
                  <label htmlFor="" className='font-semibold block float-left'>Title</label>
                  <input type="text" name="title" placeholder='e.g Missing Document' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400' />
                </div>
                <div className='space-y-2 items-center text-center justify-center' style={{ width: "fit-content" }}>
                  <label htmlFor="" className='font-semibold block float-left ml-5'>Description</label>
                  <textarea name="description" onChange={handleOnChange} className='border-1 bor
                  der-blue-200 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400 h-[10em]' placeholder='Give a brief description of the news' />
                  <p className='text-right mr-5'>value/500</p>
                </div>
                <div>
                  <label htmlFor="" className='font-semibold block float-left ml-5'>Note - </label>
                  <input type="text" name="note" placeholder='e.g deadline on Monday' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400' />
                </div>
                  <div className='space-y-2 flex flex-col'>
                    <button className='bg-blue-500 px-30 py-2 text-white font-bold rounded-md hover:bg-blue-800' onClick={addNews}>Add</button>
                    <Link
                    to='/availablenews'>
                      <button className='bg-green-700 py-2 px-20 text-white font-bold rounded-md hover:bg-blue-800'>Available News</button> 
                    </Link>
                  </div>
              </div>
          </div>
          </div>
      ):(
          <div className='flex flex-col p-5 justify-items-center items-center'>
            <div className='items-center text-center h-auto rounded-xl pb-40 px-20' style={{ width: "fit-content" }}>
              <h1 className='font-bold mt-10 text-2xl text-slate-400'>Add News</h1>
              <div className='form_inputs mt-8 space-y-10 justify-items-center'>
                <div>
                  <label htmlFor="" className='font-semibold'>Title - </label>
                  <input type="text" name="title" placeholder='e.g Missing Document' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400' />
                </div>
                <div className='space-y-2 items-center text-center justify-center' style={{ width: "fit-content" }}>
                  <label htmlFor="" className='font-semibold block mr-80'>Description - </label>
                  <textarea name="description" onChange={handleOnChange} className='border-1 border-blue-200 pl-5 py-1 rounded-sm w-[25em] placeholder:text-gray-400 h-[10em]' placeholder='Give a brief description of the news' />
                  <p className='text-right'>value/500</p>
                </div>
                <div>
                  <label htmlFor="" className='font-semibold'>Note - </label>
                  <input type="text" name="note" placeholder='e.g deadline on Monday' onChange={handleOnChange} className='border-1 border-blue-200 ml-2 pl-5 py-1 rounded-sm w-[20em] placeholder:text-gray-400' />
                </div>
                <button className='bg-blue-500 px-30 py-2 text-white font-bold rounded-md hover:bg-blue-800' onClick={addNews}>Add</button>
              </div>
          </div>
        </div>

      )}
    </div>
    
  );
}

export default News;
