import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import "./famousUser.css";

import { FaUserTie } from "react-icons/fa";

function FamousUser() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="container_famous_user">
      <div className="header_famous_user">
        <span>افرادی که شاید بشناسید</span>
        <FaUserTie className="icon_famous_user" />
      </div>
      <div className="sliders_famous_user">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="sliders_famous_User"
        >
          <SwiperSlide>
            <div className="slide_famousUser">
              <img src="https://files.virgool.io/upload/users/47856/avatar/AsyYLz.jpeg?width=128&height=128" />
              <span className="id_famous_user">Alidadkhah</span>
              <span className="name_famous_User">علی دادخواه</span>
              <button>
                <FaPlus className="plus_famous_user" />
                <span>دنبال کنید</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_famousUser">
              <img src="https://files.virgool.io/upload/users/47856/avatar/AsyYLz.jpeg?width=128&height=128" />
              <span className="id_famous_user">Alidadkhah</span>
              <span className="name_famous_User">علی دادخواه</span>
              <button>
                <FaPlus className="plus_famous_user" />
                <span>دنبال کنید</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_famousUser">
              <img src="https://files.virgool.io/upload/users/47856/avatar/AsyYLz.jpeg?width=128&height=128" />
              <span className="id_famous_user">Alidadkhah</span>
              <span className="name_famous_User">علی دادخواه</span>
              <button>
                <FaPlus className="plus_famous_user" />
                <span>دنبال کنید</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_famousUser">
              <img src="https://files.virgool.io/upload/users/47856/avatar/AsyYLz.jpeg?width=128&height=128" />
              <span className="id_famous_user">Alidadkhah</span>
              <span className="name_famous_User">علی دادخواه</span>
              <button>
                <FaPlus className="plus_famous_user" />
                <span>دنبال کنید</span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FamousUser;
