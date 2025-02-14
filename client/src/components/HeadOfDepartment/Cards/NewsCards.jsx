import React, { useEffect, useState } from 'react';

function NewsCards({ newsobject }) {
  
  return (
    <div className='flex flex-col p-10 items-center content-center justify-items-start'>
      <div className='w-[40em] text-center space-y-3'>
        {newsobject.map((news, index) => (
          <div className='justify-start text-left p-2 mb-2 grid grid-cols-2 border-2 border-gray-200 rounded-lg' key={index}>
            <div className='border-r-2 border-r-gray-200 '>
              <h1 className='font-bold text-blue-500'>Title: <span className='font-normal text-black ml-2'>{news.title}</span></h1>
                <p><span className='inline-flex font-bold text-blue-500'>Description: </span> {news.description}</p>
                <h1 className='font-bold text-blue-500'>Note: <span className='font-normal text-black'>{news.note}</span></h1>
                <h1 className='font-bold text-blue-500'>Date of post: <span className='font-normal text-black'>Date goes here</span></h1>
            </div>
              
              <div className='items-center self-center pl-20'>
                <button className='px-5 py-0.5 bg-green-600 text-white font-semibold rounded-md hover:bg-green-800'>Update</button>
                <button className='px-5 py-0.5 bg-red-500 rounded-md ml-2 text-white font-semibold hover:bg-red-800'>Delete</button>
              </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default NewsCards;
