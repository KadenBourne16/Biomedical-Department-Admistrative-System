import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Authentication/Login/login'
import SignUp from './pages/Authentication/Signup/signup'
import SignupStudent from './pages/Authentication/Signup/Student/signup_student'
import PageError from './components/page404'
import Login_Success from './components/login_success'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardMain from './components/Dashboards/dashboardcards_main'
import SignupLecturer from './pages/Authentication/Signup/Lecturer/signup_lecturer'

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/test' element={<DashboardMain/>} />    
          <Route path='/login' element={<LoginForm/>} />    
          <Route path='/signup' element={<SignUp/>} />    
          <Route path='/signup/student' element={<SignupStudent/>} />    
          <Route path='/signup/lecturer' element={<SignupLecturer/>} />
          <Route path='/HOD/dashboard/*'  element={<Dashboard/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App;