import React, { useEffect, useState } from 'react'
import '../../../style/HeadOfDepartment/H_Main.css'

function DashboardHome() {
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
  return (
    <div>
        {isMobile ? (
          <div className='pt-20 space-y-5' style={{display: "flex", flexDirection: "column", justifyItems: "center",alignItems: "center", height: "100vh"}}>
            
            <div className='section2 border-[1px] border-gray-200 rounded-lg shadow-md' style={{width: "calc(100vw - 20px)"}}>
              <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Academic Calender</h1>
                <div>
                  <ul className='text-center pt-2 space-y-2'>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                  </ul>
                </div>
            </div>

            <div className='section2 border-[1px] border-gray-200 rounded-lg shadow-md' style={{width: "calc(100vw - 20px)"}}>
              <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Student Evaluation</h1>
                <div>
                  <ul className='text-center pt-2 space-y-2'>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                  </ul>
                </div>
            </div>

            <div className='section2 border-[1px] border-gray-200 rounded-lg shadow-md' style={{width: "calc(100vw - 20px)"}}>
              <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Lecturers Evaluation</h1>
                <div>
                  <ul className='text-center pt-2 space-y-2'>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                  </ul>
                </div>
            </div>

            <div className='section2 border-[1px] border-gray-200 rounded-lg shadow-md' style={{width: "calc(100vw - 20px)"}}>
              <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>News</h1>
                <div>
                  <ul className='text-center pt-2 space-y-2'>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                    <li>DefaultName</li>
                  </ul>
                </div>
            </div>
          </div>
        ): (
          <div>
              <div className='dashboard_main_container pl-2'>
                    <div className='section1 ml-5 mt-2'>
                      <h1 className='text-2xl font-semibold'>Welcome Back <span className='font-bold text-blue-400'>DefaultName</span></h1>
                    </div>

                    <div className='section2 border-[1px] border-gray-200 rounded-lg shadow-2xl'>
                      <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>News</h1>
                      <div>
                        <ul className='text-center pt-2 space-y-2'>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                        </ul>
                      </div>
                    </div>

                    <div className='section3 border-1 border-gray-200 rounded-lg shadow-2xl'>
                      <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Lecturer Evaluations</h1>
                      <div>
                        <ul className='text-center pt-2 space-y-2'>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                        </ul>
                      </div>
                    </div>

                    <div className='section4 border-1 border-gray-200 rounded-lg shadow-2xl'>
                      <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Academic Calender</h1>
                      <div>
                        <ul className='text-center pt-2 space-y-2'>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                        </ul>
                      </div>
                    </div>

                    <div className='section5 border-1 border-gray-200 rounded-lg shadow-2xl'>
                      <h1 className='font-semibold items-center text-center mt-2 text-blue-600 text-2xl'>Student Evaluation</h1>
                      <div>
                        <ul className='text-center pt-2 space-y-2'>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                          <li>DefaultName</li>
                        </ul>
                      </div>
                    </div>
                </div>
          </div>
        )}
    </div>
    
  )
}

export default DashboardHome;