import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Radio } from "antd";

import "./Account.css";

function About() {
  return (
    <div className="container_settings_about">
      <div className="container_change_name">
        <div className="container_change_name_right">
          <span className="title_change_name">نام نمایشی</span>
          <span>این نام در پروفایل شما نمایش داده می‌شود</span>
        </div>
        <div className="container_change_name_left">
          <InputName />
        </div>
      </div>
      {/*  */}
      <div className="container_section_account">
        <div className="container_input">
          <label>نام کاربری</label>
          <input type="text" placeholder="نام کاربری" />
        </div>
        <div className="container_input">
          <label>نام کاربری</label>
          <input type="text" placeholder="نام کاربری" />
        </div>
        <div className="container_input">
          <label>نام کاربری</label>
          <input type="text" placeholder="نام کاربری" />
        </div>
        <div className="container_input">
          <label>نام کاربری</label>
          <input type="text" placeholder="نام کاربری" />
        </div>
      </div>
      {/*  */}
      <div className="container_change_bio">
        <div className="container_change_bio_right">
          <span className="title_change_bio">عکس پروفایل</span>
          <span className="subtitle_bio">
            عکس شما در صفحه پروفایل و پست‌ها نمایش داده می‌شود.
          </span>
        </div>
        <div className="container_change_bio_left">
          <img
            src="https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg"
            className="profile_pic"
          />
          <span className="btn_del_profile">حذف</span>
        </div>
      </div>
      <div className="container_change_bio">
        <div className="container_change_bio_right">
          <span className="title_change_bio">جنسیت</span>
        </div>
        <div className="container_change_bio_left">
          <Radios />
        </div>
      </div>
      <div className="container_change_bio">
        <div className="container_change_bio_right">
          <span className="title_change_bio">تاریخ تولد</span>
          <span className="subtitle_bio">
            تاریخ تولد در پروفایل نمایش داده نمی‌شود.
          </span>
        </div>
        <div className="container_change_bio_left">
          <DateInput />
        </div>
      </div>
      <div className="container_change_bio">
        <div className="container_change_bio_right">
          <span className="title_change_bio">درباره شما</span>
          <span className="subtitle_bio">
            بیوگرافی شما در صفحه پروفایل نمایش داده می شود. حداکثر ۲۰۰ کاراکتر
          </span>
        </div>
        <div className="container_change_bio_left">
          <textarea id="bio_text"></textarea>
        </div>
      </div>
      <button className="btn_send_data_user">ثبت اطلاعات</button>
    </div>
  );
}

export default About;

function Radios() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value="other">سایر</Radio>
      <Radio value="women">زن</Radio>
      <Radio value="man">مرد</Radio>
    </Radio.Group>
  );
}

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const DateInput = () => (
  <Space direction="vertical">
    <DatePicker format="YYYY-MM-DD" onChange={onChange} />
  </Space>
);

const InputName = () => (
  <>
    <Input placeholder="نام خود را وارد کنید" prefix={<UserOutlined />} />
  </>
);
