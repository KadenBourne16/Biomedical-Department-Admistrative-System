import React, { useEffect, useState } from 'react'
import News from '../../../components/HeadOfDepartment/Forms/News'
import NewsCards from '../../../components/HeadOfDepartment/Cards/NewsCards';
import axios from 'axios'

function UpdateNewsPage() {
  const [getNews, setGetNews] = useState([])

  useEffect(() => {
    const getNewsFunction = async () => {
      try {
        const retrieve_news_data = await axios.get("http://localhost:3000/News");
        setGetNews(retrieve_news_data.data)
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    getNewsFunction();
  }, [getNews]);
  

  return (
    <div className='grid grid-cols-2' style={{width:"calc(100vw - 20em)"}}>
        <div className='border-r-2 border-r-gray-200 m-5'>
            <News/>
        </div>
        <div className='m-0 justify-items-center items-center text-center mr-2'>
            <h1 className='text-2xl font-bold text-slate-400 mt-5'>Available News</h1>
            <NewsCards newsobject={getNews}/>
        </div>
    </div>
  )
}

export default UpdateNewsPage;