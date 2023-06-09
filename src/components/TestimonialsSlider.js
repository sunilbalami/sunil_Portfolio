import React from "react";
import { testimonials } from "../data";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";
import { Autoplay, Pagination } from "swiper";

const TestimonialsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper transition-all"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide
              key={index}
              className="transform transition-all duration-500 ease-in-out hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
              </div>
              <div className="flex flex-col max-w-3xl">
                <h5 className="font-body text-2xl mb-8 italic font-normal">
                  {authorText}
                </h5>
              </div>
              <div>
                <p className="text-lg text-accent">{authorName}</p>
                <p>{authorPosition}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialsSlider;
