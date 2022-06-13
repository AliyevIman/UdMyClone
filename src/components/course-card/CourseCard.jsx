import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseInfo }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="course-item">
        <Link to={`/course-details/${courseInfo.courseId}`}>
          <img
            className="img-fluid"
            src={courseInfo.photoUrl}
            alt="course-preview"
          />
          <div className="cbox-4-txt">
            {/* <p className="course-tags">
              <span>Languages</span>
              <span>English</span>
            </p> */}
            <h5 className="h5-xs">{courseInfo.courseName}</h5>
            <div className="course-rating clearfix">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>{courseInfo.reyting}</span>
            </div>
            <span className="course-price">
              <span className="old-price">
                {courseInfo.discount > 0 ? (
                  <>
                    <del>{courseInfo.price} $</del> {" "}
                    <span>{courseInfo.discount} $</span> 
                  </>
                ) : (
                  <span>{courseInfo.price} $</span>
                )}
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
