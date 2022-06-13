import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseDetail from '../pages/CourseDetail'
import Courses from '../pages/Courses'
import Explorepage from '../pages/Explorepage'
import FilterCourse from '../pages/FilterCourse'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import Shop from '../pages/Shop'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-details/:id" element={<CourseDetail/>}/>
        <Route path="/courses/:id" element={<Courses/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path='/search/:term' element={<FilterCourse/>} />
        <Route path='/explore' element={<Explorepage/>} />

    </Routes>
  )
}
  
export default MyRoutes