import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import calculateReadingTime from "../method/calculateReadingTime";
import { useNavigate } from "react-router-dom";

export default function SliderChosenPost({ shadow, posts }) {
  let navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="slideChosen"
      >
        {posts?.map((post) => (
          <SwiperSlide key={post?.post_id}>
            <div
              className="slide_chosen"
              style={{ boxShadow: shadow && "1px 1px 20px 0px #e2e2e2" }}
              onClick={() => navigate(`/article?post-id=${post?.post_id}`)}
            >
              <img src={post?.cover_url} className="img_slide_chsoen" />
              <h3>{post?.title}</h3>
              <div className="footer_slide_chosen_post">
                <img src={post?.profile_writer} />
                <span className="author_chosen_post">{post?.name_writer}</span>
                <span className="time_read_chosen_post">
                  {`خواندن ${calculateReadingTime(post?.content)} دقیقه`}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div
            className="slide_chosen"
            style={{ boxShadow: shadow && "1px 1px 20px 0px #e2e2e2" }}
          >
            <img
              src="https://files.virgool.io/upload/users/4319/posts/jekdzcpm6pzq/9fj3v1dvzojh.jpg?width=1680"
              className="img_slide_chsoen"
            />
            <h3>آغاز مسیر کوبر (قسمت اول)</h3>
            <div className="footer_slide_chosen_post">
              <img src="https://files.virgool.io/upload/users/3413776/avatar/aLMxPE.jpg?width=40&height=40" />
              <span className="author_chosen_post">فائزه عبدی پور</span>
              <span className="time_read_chosen_post">خواندن ۱۶ دقیقه</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide_chosen"
            style={{ boxShadow: shadow && "1px 1px 20px 0px #e2e2e2" }}
          >
            <img
              src="https://files.virgool.io/upload/users/4319/posts/jekdzcpm6pzq/9fj3v1dvzojh.jpg?width=1680"
              className="img_slide_chsoen"
            />
            <h3>آغاز مسیر کوبر (قسمت اول)</h3>
            <div className="footer_slide_chosen_post">
              <img src="https://files.virgool.io/upload/users/3413776/avatar/aLMxPE.jpg?width=40&height=40" />
              <span className="author_chosen_post">فائزه عبدی پور</span>
              <span className="time_read_chosen_post">خواندن ۱۶ دقیقه</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide_chosen"
            style={{ boxShadow: shadow && "1px 1px 20px 0px #e2e2e2" }}
          >
            <img
              src="https://files.virgool.io/upload/users/4319/posts/jekdzcpm6pzq/9fj3v1dvzojh.jpg?width=1680"
              className="img_slide_chsoen"
            />
            <h3>آغاز مسیر کوبر (قسمت اول)</h3>
            <div className="footer_slide_chosen_post">
              <img src="https://files.virgool.io/upload/users/3413776/avatar/aLMxPE.jpg?width=40&height=40" />
              <span className="author_chosen_post">فائزه عبدی پور</span>
              <span className="time_read_chosen_post">خواندن ۱۶ دقیقه</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide_chosen"
            style={{ boxShadow: shadow && "1px 1px 20px 0px #e2e2e2" }}
          >
            <img
              src="https://files.virgool.io/upload/users/4319/posts/jekdzcpm6pzq/9fj3v1dvzojh.jpg?width=1680"
              className="img_slide_chsoen"
            />
            <h3>آغاز مسیر کوبر (قسمت اول)</h3>
            <div className="footer_slide_chosen_post">
              <img src="https://files.virgool.io/upload/users/3413776/avatar/aLMxPE.jpg?width=40&height=40" />
              <span className="author_chosen_post">فائزه عبدی پور</span>
              <span className="time_read_chosen_post">خواندن ۱۶ دقیقه</span>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
