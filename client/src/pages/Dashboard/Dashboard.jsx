import React from 'react'
import SideNav from '../../components/Navs/sidenav_main'
import DashboardMain from '../../components/Dashboards/dashboardcards_main'

import { Route, Routes} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <div>
            <SideNav/>
        </div>
        <div>
            <Routes>
                <Route path="/home" element={<DashboardMain/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard