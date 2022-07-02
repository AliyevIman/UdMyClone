import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { Container } from "@mui/system";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/BaseConfig";
import CourseCard from "../components/course-card/CourseCard";
import PopularCourses from "../components/popular-courses/PopularCourses";

function valuetext(value) {
  return `${value}AZN`;
}
const Explorepage = () => {
  const [price, setValue] = React.useState([0, 5000]);
  const [sortBy, setsortBy] = useState(2);
  const [instructors, setinstructors] = React.useState([]);
  const [selectedInsturctors, setselectedInsturctors] = React.useState([]);
  const [courses, setcourses] = React.useState([]);
  const [raiting, setraiting] = useState(0);
  const getInstructors = async () => {
    const { data } = await axios.get(BASE_URL + "api/Instructor");
    setinstructors(data);
  };
  const getCourse = useCallback(async () => {
    const { data } = await axios.post(
      `${BASE_URL}api/course/filter`,{
        minPrice:price[0],
        maxPrice:price[1],
        sortBy,
        Rating: raiting,
        instructorIds :selectedInsturctors
      }
    );
    setcourses(data);
  }, [price, sortBy, raiting,selectedInsturctors]);

  useEffect(() => {
    getCourse();
  }, [getCourse]);
  useEffect(() => {
    getInstructors();
  }, []);
  const checkedInstructor=(e)=>{
    const instId=Number(e.target.value);
    if(e.target.checked){
      setselectedInsturctors(i=>[...i,instId])
    }else{
      setselectedInsturctors(ins=>ins.filter(i=>i!==instId))
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <div className="row my-5">
        <div className="col-lg-3">
          <div className="explore-left">
            <div className="filter-item">
              <select
                onChange={(e) => setsortBy(e.target.value)}
                className="form-control"
              >
                <option value={2}>New</option>

                <option value={1}>Pirce Low to High</option>
                <option value={0}>Pirce High to Low</option>
              </select>
            </div>
            <div className="filter-item ">
              <h6>Price:</h6>
              <Slider
                max={5000}
                min={0}
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
            <div className="filter-item ">
              <h6>Raiting:</h6>
              <ul className="list-unstyled d-flex">
                {[1, 2, 3, 4, 5].map((c) => (
                  <li onClick={() => setraiting(c)}>
                    <StarOutlineIcon  className={c<raiting ?"raitig-active":""} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-item ">
              {instructors.map((ins) => (
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox value={ins.id} onChange={e=>checkedInstructor(e)}  />}
                    label={`${ins.fullName}`}
                  />
                </FormGroup>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {courses.courses?.map((course) => (
              <CourseCard key={course.courseId} courseInfo={course} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Explorepage;