import React, { useEffect, useRef, useState,createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../api/BaseConfig";
import CategoryItem from "../components/category-item/CategoryItem";
import MainSlider from "../components/mainSlider/MainSlider";
import PopularCourses from "../components/popular-courses/PopularCourses";
import { changeColor } from "../Redux/Action/ColorAction";

const Home = () => {
  const handleScrollButton = () => {
    window.scrollTo(0, 0);
  };
  const btnRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        console.log("aaa");
        btnRef.current.classList.add("active");
      } else {
        btnRef.current.classList.remove("remove");
      }
    });
  }, []);

  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const getCategories = () => {
    fetch(BASE_URL + "api/Category/GetAll")
      .then((c) => c.json())
      .then((c) => setCategories(c));
  };
  useEffect(() => {
    getCategories();
  }, []);
  const colorChangeHandler = () => {
    dispatch(changeColor(currentColor));
  };
  return (
    <>
      <MainSlider />
      <input
        onChange={(c) => setCurrentColor(c.target.value)}
        type="text"
        placeholder="color..."
      />
      <button onClick={colorChangeHandler} className="btn btn-warning">
        Change Color
      </button>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-004-computer"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">2,769 online courses</h5>
                  <p className="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-028-learning-1"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">Expert instruction</h5>
                  <p className="p-md">Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex icon-xs">
                <span className="flaticon-032-tablet"></span>
                <div className="abox-1-txt">
                  <h5 className="h5-md">Lifetime access</h5>
                  <p className="p-md">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About end */}
      <section id="about2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <img className="img-fluid" src="./image/image-01.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about2-right">
                <h3 className="h3-sm">
                  Transform your life through online education
                </h3>
                <p>
                  An enim nullam tempor sapien gravida donec porta and blandit
                  ipsum enim justo integer velna vitae auctor integer congue
                  magna and purus pretium risus ligula rutrum luctus ultrice
                </p>
                <ul className="txt-list mb-15">
                  <li>
                    Nullam rutrum eget nunc varius etiam mollis risus undo
                  </li>
                  <li>
                    Integer congue magna at pretium purus pretium ligula at
                    rutrum risus luctus dolor auctor ipsum blandit purus
                  </li>
                  <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                  <li>
                    At pretium purus integer congue magna pretium ligula at
                    ipsum blandit purus rutrum risus luctus dolor auctor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About 2 End  */}
      <PopularCourses />
      <section className="trend-categories my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-md-12">
                <div className="section-title mb-5 d-flex justify-content-between align-items-center">
                  <div className="col-lg-7">
                    <div className="section-title-left">
                      <h3 className="h3-sm">Most Category Trend</h3>
                      <p className="p-md">
                        Aliquam a augue suscipit, luctus neque purus ipsum neque
                        dolor primis libero tempus, blandit posuere and ligula
                        varius magna a porta
                      </p>
                    </div>
                  </div>
                  <div className="title-btn">
                    <a
                      className="btn btn-outline-dark rose-hover"
                      href="/courses-list"
                    >
                      View All Categorie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {categories?.map((c) => (
              <CategoryItem key={c.categoryId} category={c} />
            ))}
          </div>
        </div>
      </section>
      <button
        ref={btnRef}
        onClick={handleScrollButton}
        className="btn btn-dark my-bt"
      >
        Yuxarı
      </button>
    </>
  );
};

export default Home;
