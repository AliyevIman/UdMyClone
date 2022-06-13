import React, { useCallback, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { useDispatch, useSelector } from "react-redux";
import "../searchForm/Search.scss"
import { Link } from "react-router-dom";
const Search = () => {
  // const dipatch = useDispatch();
  // const search = useSelector((state) => state.search);
  const [searchterm, setsearchterm] = useState("");
  const [courses, setcourses] = useState([]);
  const getSearch =useCallback( async (q) => {
   if(searchterm!==""){
    let { data } = await axios.get(BASE_URL + "api/Course/filter/" + encodeURIComponent(searchterm));
    setcourses(data)
   } else{
     setcourses([])
   }
  },[searchterm])
  useEffect(() => {
    getSearch();
  }, [searchterm]);
const inputRef = useRef(null)
const resultRef = useRef(null)

 useEffect(() => {
  inputRef.current.addEventListener("focus", () => {
    resultRef.current.classList.add("active");
  });

  inputRef.current.addEventListener("focusout", () => {
    setTimeout(()=>{
      resultRef.current.classList.remove("active");
    },200)
  });
}, []);

  return (
    <div className="input-group p-3 search-from">
      <input
      ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Search"
        aria-describedby="basic-addon2"
        onChange={(e) => setsearchterm(e.target.value)}
      />
      <span className="input-group-text btn-dark" id="basic-addon2">
        <SearchIcon sx={{ color: "#fff" }} />
      </span>

      <div className="dropped-result" ref={resultRef}>
        <ul className="list-unstyled">
          {courses?.map((c)=>(  
            <li key={c.courseId}>
              <Link to={`/course-details/${c.courseId} `}>{c.courseName}</Link>
              
              </li>
          ))}
        </ul>
      </div>
    </div>
          
    
  );
};

export default Search;
