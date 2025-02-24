import React, { useEffect, useState } from 'react';
import SideNav from '../../components/HeadOfDepartment/Navs/sidenav_main';
import DashboardMain from '../../components/HeadOfDepartment/Dashboards/dashboardcards_main';
import KeyIndicators from './KeyIndicators/KeyIndicators';
import UpdateNewsPage from './Others/Upadte_News_Page';
import Page404 from '../../components/page404';
import { FaBars, FaCross } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';

function H_Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    }
    window.addEventListener('resize', handleResize);
    return(
      window.removeEventListener('resize', handleResize)
    )
  })



  const handleShowMenu = () => {
    if(showMenu === false){
      setShowMenu(true);
    }else{
      setShowMenu(false);
    }
  }


  return (
    <div className=''>
      {isMobile ? (
        <div className='flex flex-row'>
          <div className='absolute'>
            <SideNav/>
          </div>
            <div className='w-full lg:w-4/5 xl:w-5/6'>
              <Routes>
                <Route path="home" element={<DashboardMain />} />
                <Route path="key_indicators" element={<KeyIndicators />} />
                <Route path="updatenews" element={<UpdateNewsPage />} />
              </Routes>
          </div>
        </div>
      ): (
        <div className='flex flex-row h-screen'>
          <div className='lg:w-1/5 xl:w-1/6 hidden md:block'>
            <SideNav />
          </div>
          <div className='w-full lg:w-4/5 xl:w-5/6'>
            <Routes>
              <Route path="home" element={<DashboardMain />} />
              <Route path="key_indicators" element={<KeyIndicators />} />
              <Route path="updatenews" element={<UpdateNewsPage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default H_Main;

