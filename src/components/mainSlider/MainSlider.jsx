import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import "./main-slider.scss";
const MainSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="my-slider"
    >
      <SwiperSlide className="slider-item">
        <img src="/image/slide-2.jpg" className="img-fluid" alt="" />
        <Container>
        <div className="slider-content">
        <div className="col-lg-4">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <form action="#">
              <input
                className="form-control"
                type="text"
                placeholder="Learn..."
              />
            </form>
          </div>
        </div>
          
        </Container>
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src="/image/slide-2.jpg" className="img-fluid" alt="" />
        <Container>
        <div className="slider-content">
        <div className="col-lg-4">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <form action="#">
              <input
                className="form-control"
                type="text"
                placeholder="Learn..."
              />
            </form>
          </div>
        </div>
          
        </Container>
      </SwiperSlide>


    </Swiper>
  );
};

export default MainSlider;
