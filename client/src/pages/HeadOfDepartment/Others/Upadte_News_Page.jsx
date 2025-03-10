import React, { useEffect, useState } from 'react'
import News from '../../../components/HeadOfDepartment/Forms/News'
import NewsCards from '../../../components/HeadOfDepartment/Cards/NewsCards';
import axios from 'axios'

function UpdateNewsPage() {
  const [getNews, setGetNews] = useState([])

   const [isMobile, setIsMobile] = useState(window.innerWidth < 769)
      
      useEffect(() => {
        const resizer = () => {
          setIsMobile(window.innerWidth < 769);
        }
        window.addEventListener('resize', resizer);
        return(
          window.removeEventListener('resize', resizer)
        )
      }, [isMobile])

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
    <div>
      {isMobile ? (
        <div>
          <News/>
        </div>
      ):(
        <div className='grid grid-cols-2 overflow-auto' style={{width:"calc(100vw - 20em)"}}>
          <div className='border-r-2 border-r-gray-200 m-5'>
              <News/>
          </div>
          <div className='m-0 justify-items-center items-center text-center mr-2 text-wrap'>
              <h1 className='text-2xl font-bold text-slate-400 mt-5'>Available News</h1>
              <NewsCards newsobject={getNews}/>
          </div>
      </div>
      )}
    </div>
    
  )
}

export default UpdateNewsPage;