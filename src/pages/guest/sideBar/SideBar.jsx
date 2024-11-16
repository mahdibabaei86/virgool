import Slider_Swiper from "../Slider_Swiper";
import "./SideBar.css";
import { FaMicrophone } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="ad_sideBar">
        <img src="https://static.virgool.io/images/landingpages/payman/payman-banner-1.png" />
        <div className="ad_sideBar_tags">
          <span>بلیط هواپیما</span>
          <span>خرید تلگرام پرمیوم</span>
        </div>
      </div>
      <div className="certeficated">
        <img src="https://www.p30web.org/wp-content/uploads/2016/12/enamad_icon_text_color_blue_1024-768x768.png" />
        <img src="https://bazeh.com/wp-content/uploads/2018/05/%D9%86%D9%85%D8%A7%D8%AF-%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D8%AF%D9%87%DB%8C-%D8%AF%D8%B1-%D8%AD%D8%A7%D9%84-%D8%AB%D8%A8%D8%AA-min.png" />
      </div>
      <div className="selected_posts">
        <div className="title_selected_posts">
          <div className="Logo_microphone_slected_posts">
            <FaMicrophone className="mic_selected_posts" />
          </div>
          <h3>پست‌های صوتی انتخابی برای شما</h3>
        </div>
        <div className="container_slider">
          <Slider_Swiper />
          <div className="info_slide_cast">
            <div className="title_info_cast">
              <span>فیل کست</span>
              <a href="#">مشاهده همه قسمت ها</a>
            </div>
            <div className="list_cast_posts">
              <div className="li_cast_post">
                <img src="https://files.virgool.io/upload/users/3217565/posts/srgacccjqppi/4oxpt4g7mmjr.jpg?width=96" />
                <div className="info_txt_post_li">
                  <h3>قسمت پنجم-در پوست گرگ</h3>
                  <span>01:04:033</span>
                </div>
                <div className="btn_li_slide">
                  <FaPlay className="logo_btn_slide" />
                </div>
              </div>
              <div className="li_cast_post">
                <img src="https://files.virgool.io/upload/users/3217565/posts/srgacccjqppi/4oxpt4g7mmjr.jpg?width=96" />
                <div className="info_txt_post_li">
                  <h3>قسمت پنجم-در پوست گرگ</h3>
                  <span>01:04:033</span>
                </div>
                <div className="btn_li_slide">
                  <FaPlay className="logo_btn_slide" />
                </div>
              </div>
              <div className="li_cast_post">
                <img src="https://files.virgool.io/upload/users/3217565/posts/srgacccjqppi/4oxpt4g7mmjr.jpg?width=96" />
                <div className="info_txt_post_li">
                  <h3>قسمت پنجم-در پوست گرگ</h3>
                  <span>01:04:033</span>
                </div>
                <div className="btn_li_slide">
                  <FaPlay className="logo_btn_slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="tag_selected">
        <div className="title_selected_posts">
          <div className="Logo_microphone_slected_posts">
            <FaTags className="mic_selected_posts" />
          </div>
          <h3>موضوعات پیشنهادی</h3>
        </div>
        <div className="list_tags">
          <span className="tag_slc">کسب و کار</span>
          <span className="tag_slc">موسیقی</span>
          <span className="tag_slc">رابطه</span>
          <span className="tag_slc">اقتصاد</span>
          <span className="tag_slc">استارتاپ</span>
          <span className="tag_slc">خانواده</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SideBar;
