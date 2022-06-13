import React from "react";
import { Link } from "react-router-dom";
import "./category-item.scss";
const CategoryItem = ({ category }) => {
  return (
    <div className="col-lg-3">
      <div className="category-item">
        <Link to={`/courses/${category.categoryId}`}>
          {/* <img src="" alt="" /> */}
          <h4>{category.categoryName}</h4>
          {/* <p>Course Count</p> */}
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
