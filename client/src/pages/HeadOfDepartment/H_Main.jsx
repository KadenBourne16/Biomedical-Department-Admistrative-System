import React from 'react';
import SideNav from '../../components/HeadOfDepartment/Navs/sidenav_main';
import DashboardMain from '../../components/HeadOfDepartment/Dashboards/dashboardcards_main';
import KeyIndicators from './KeyIndicators/KeyIndicators';
import UpdateNewsPage from './Others/Upadte_News_Page';
import Page404 from '../../components/page404';
import { Route, Routes } from 'react-router-dom';

function H_Main() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='lg:w-1/5 xl:w-1/6 hidden md:block'>
        <SideNav />
      </div>
      <div className='w-full lg:w-4/5 xl:w-5/6'>
        <Routes>
          <Route path="home" element={<DashboardMain />} />
          <Route path="key_indicators" element={<Page404 />} />
          <Route path="updatenews" element={<UpdateNewsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default H_Main;

