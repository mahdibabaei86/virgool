import LogoBg from "../../../images/logo-bg.svg";
import { Helmet } from "react-helmet";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ProtectAuthPage from "../../../ProtectRouter/ProtectAuthPage";

import "./Register.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  let refUsername = useRef(null);
  let refPassword = useRef(null);
  let refEmail = useRef(null);

  function handelRegister() {
    let newUser = {
      username: refUsername.current.value,
      password: refPassword.current.value,
      email: refEmail.current.value,
    };

    fetch(`${process.env.REACT_APP_URL_BACKEND}api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 400) {
          toast.error(result.message);
        }
        if (result.status == 201) {
          toast.success("با موفقیت ثبت نام شدید");
          navigate("/login/");
        }
      });
  }

  return (
    <ProtectAuthPage>
      <div className="container_Register">
        <Helmet>
          <title>ایجاد حساب کاربری - ویرگول</title>
        </Helmet>
        <div className="container_right">
          <img src={LogoBg} />
          <h1>اینجا هر کسی می‌تونه بنویسه!</h1>
          <p>
            همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع
            کن.
          </p>
          <span className="copyRight">© تمام حقوق برای ویرگول محفوظ است.</span>
          <ul>
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
          <h2 className="title_make_user">ایجاد حساب کاربری</h2>
          <span className="phone_title">
            شماره موبایل یا پست الکترونیک خود را وارد کنید
          </span>
          <input
            type="text"
            ref={refUsername}
            placeholder="نام کاربری خود را وارد کنید"
          />
          <input type="text" ref={refPassword} placeholder="پسورد..." />
          <input type="email" ref={refEmail} placeholder="ایمیل..." />
          <button className="btn_cretae_account" onClick={handelRegister}>
            <MdKeyboardArrowLeft className="row_btn_container_right" />
            <span>ایجاد حساب کاربری</span>
          </button>
        </div>
      </div>
    </ProtectAuthPage>
  );
}

export default Register;
