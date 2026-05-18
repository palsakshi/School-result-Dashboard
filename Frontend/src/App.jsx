import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Pages/Home'
import EditStudents from './Component/Pages/Editstudents'
import AdminLogin from './Component/Pages/AdminLogin'
import ViewAllStudents from './Component/Pages/viewStudents'
import ResultDetails from './Component/Pages/ResultDetails'
import Dashboard from './Component/Pages/Dashboard'
import NewStudent from './Component/Pages/AddStudents'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path = '/Editstudents' element={<EditStudents/>}/>
        <Route path = '/addstudent'  element = {<NewStudent/>}/>
        <Route path ='/AdminLogin' element={<AdminLogin />}/>
        <Route path ='/Dasboard' element ={<Dashboard/>}/>
        <Route path ='/ResultDetails' element ={<ResultDetails/>}/>
        <Route path ='/ViewAllStudents' element = {<ViewAllStudents/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
