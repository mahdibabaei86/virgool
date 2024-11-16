import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaPenFancy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

import "./SidePanel.css";

const items = [
  {
    key: "/writer/home",
    label: "صفحه اصلی",
    icon: <HiHome />,
  },
  {
    key: "/writer/new-post",
    label: "نوشتن پست",
    icon: <FaPenFancy />,
  },
  {
    key: "/writer/posts",
    label: "پست‌ها",
    icon: <MdArticle />,
  },
  // {
  //   key: "/writer/stats",
  //   label: "آمار بازدید",
  //   icon: <IoStatsChartOutline />,
  // },
  {
    key: "/writer/bookmarks",
    label: "بوک‌مارک‌ها",
    icon: <FaBookmark />,
  },
  {
    key: "/writer/favorites",
    label: "پست‌های مورد علاقه",
    icon: <AiFillLike />,
  },
  {
    key: "settings",
    label: "تنظیمات کاربری",
    icon: <IoMdSettings />,
    children: [
      {
        key: "/writer/settings/account",
        label: "حساب کاربری",
      },
      {
        key: "/writer/settings/notifications",
        label: "اطلاعیه‌ها",
      },
      {
        key: "/writer/settings/advanced",
        label: "تنظیمات پیشرفته",
      },
    ],
  },
];

const SidebarMenu = () => {
  const [current, setCurrent] = useState("/home");
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="aside_panel">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        style={{
          width: 256,
          direction: "rtl",
          textAlign: "right",
        }}
        items={items}
      />
    </div>
  );
};

export default SidebarMenu;
