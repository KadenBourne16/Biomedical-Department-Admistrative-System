import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Authentication/Login/login'
import SignUp from './pages/Authentication/Signup/signup'
import SignupStudent from './pages/Authentication/Signup/Student/signup_student'
import PageError from './components/page404'
import Login_Success from './components/login_success'
import HDashboard from './pages/HeadOfDepartment/H_Main'
import SignupLecturer from './pages/Authentication/Signup/Lecturer/signup_lecturer'
import NewsCards from './components/HeadOfDepartment/Cards/NewsCards'
import News from '../src/components/HeadOfDepartment/Forms/News'


function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/test' element={<NewsCards/>} />    
          <Route path='/' element={<LoginForm/>} />    
          <Route path='/signup' element={<SignUp/>} />    
          <Route path='/signup/student' element={<SignupStudent/>} />    
          <Route path='/signup/lecturer' element={<SignupLecturer/>} />
          <Route path='/hod/dashboard/*'  element={<HDashboard/>}/>

      </Routes>
   </BrowserRouter>
  )
}

export default App;