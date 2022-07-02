import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../course-card/CourseCard";
import "./popular-courses.scss";
import {BASE_URL} from "../../api/BaseConfig";
const PopularCourses = () => {
  const [courses, setcourses] = useState([])
  const getCourses=()=>{
    fetch(BASE_URL+"api/course",{
      method:"Get",
      headers:{
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI4M2E5ZmM5Yy0wNDc1LTQ0MjgtYTM3OC1hYTIzYTQwN2NmZDYiLCJGaXJzdG5hbWUiOiJYZXlyYW5zYSIsIkxhc3RuYW1lIjoiQWxpeWV2YSIsIkVtYWlsIjoieGV5cmFuc2FAZ21haWwuY29tIiwiZXhwIjoxNjUzNzU4ODg0LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzExMy8ifQ.rPaYYOUk5DniWlE5ctX8KFdbXZw-qnfX52Kw0jkq8G0"
      }
    }).then(c=>c.json()).then(c=>setcourses(c));
  }
  useEffect(()=>{
    getCourses()
  },[])
  return (
    <section id="popular-courses" className="courses-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-5 d-flex justify-content-between align-items-center">
                <div className="col-lg-7">
                <div className="section-title-left">
                <h3 className="h3-sm">Most Popular Courses</h3>
                <p className="p-md">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
              </div>

                </div>
              
              <div className="title-btn">
                <Link className="btn btn-outline-dark rose-hover" to="/courses-list">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            {courses.map(course=>(
               <CourseCard key={course.courseId} courseInfo={course}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
