import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/BaseConfig';
import CourseCard from '../components/course-card/CourseCard';

const Courses = () => {
    const {id}=useParams();
    const [courseList,setCourseList]=useState([]);
    const getCourseByCategory=(myId)=>{
        fetch(`${BASE_URL}api/course/category/${myId}`)
        .then(c=>c.json())
        .then(c=>setCourseList(c))
    }
    useEffect(()=>{
        getCourseByCategory(id)
    },[id])
  return (
    <div>
        <h4>Courses</h4>
        {courseList?.map((course)=>(
            <CourseCard key={course.courId} courseInfo={course}/>
        ))}
    </div>
  )
}

export default Courses