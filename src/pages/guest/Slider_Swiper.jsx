import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider_Swiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState([
    {
      img: "https://files.virgool.io/upload/publication/tlceemalprni/zfugzr.jpg?width=140",
      title: "فیل کست",
    },
    {
      img: "https://files.virgool.io/upload/publication/tlceemalprni/zfugzr.jpg?width=140",
      title: "فیل کست",
    },
    {
      img: "https://files.virgool.io/upload/publication/tlceemalprni/zfugzr.jpg?width=140",
      title: "فیل کست",
    },
    {
      img: "https://files.virgool.io/upload/publication/tlceemalprni/zfugzr.jpg?width=140",
      title: "فیل کست",
    },
  ]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="slider_X">
              <img src={slideContent.img} />
              <h3>{slideContent.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
