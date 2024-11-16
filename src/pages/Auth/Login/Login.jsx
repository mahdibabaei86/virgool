import LogoBg from "../../../images/logo-bg.svg";
import { Helmet } from "react-helmet";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import ProtectAuthPage from "../../../ProtectRouter/ProtectAuthPage";
import { useAuth } from "../../../hooks/useAuth";

function Login() {
  let navigate = useNavigate();
  let InputPassLogin = useRef(null);
  let InputUserNameLogin = useRef(null);
  let { login } = useAuth();

  function handelLogin() {
    let user = {
      username: InputUserNameLogin.current.value,
      password: InputPassLogin.current.value,
    };

    fetch(`${process.env.REACT_APP_URL_BACKEND}api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 200) {
          toast.success("Login SuccessFully");
          login(result.userID);
          navigate("/");
        } else {
          toast.error("Login Failed");
        }
      });
  }

  return (
    <ProtectAuthPage>
      <div className="container_login_page">
        <Helmet>
          <title>ورود به حساب کاربری - ویرگول</title>
        </Helmet>
        <div className="container_right">
          <img src={LogoBg} />
          <h1>اینجا هر کسی می‌تونه بنویسه!</h1>
          <p>
            همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع
            کن.
          </p>
          <div className="love_virgool">
            <ul className="ul_list_container_right">
              <li className="li_list_right">
                اگر شما هم عاشق مطالعه هستید در ویرگول می‌توانید مطالب متنوعی را
                در موضوعات مختلف بخوانید.
              </li>
              <li className="li_list_right">
                با نوشتن مطلبتان در ویرگول آن را در معرض دید قشر وسیعی از
                خوانندگان قرار خواهید داد.
              </li>
              <li className="li_list_right">
                ویرگول آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما
                ارائه می‌دهد.
              </li>
            </ul>
          </div>
          <span className="copyRight">© تمام حقوق برای ویرگول محفوظ است.</span>
          <ul className="list_cn_right">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>صفحه اصلی</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className="container_left">
          <h2 className="title_make_user">ورود به حساب کاربری</h2>
          <span className="phone_title">
            نام کاربری، پست الکترونیک یا شماره موبایل خود را وارد کنید
          </span>
          <input
            type="text"
            placeholder="نام کاربری"
            ref={InputUserNameLogin}
          />
          <input type="password" placeholder="پسورد" ref={InputPassLogin} />
          <button className="btn_cretae_account" onClick={handelLogin}>
            <MdKeyboardArrowLeft className="row_btn_container_right" />
            <span>ورود به حساب کاربری</span>
          </button>
        </div>
      </div>
    </ProtectAuthPage>
  );
}

export default Login;
