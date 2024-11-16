import "./Header_top.css";
import Logo from "../../../images/logo.webp";
import { FiInfo } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import TooltipRegister from "../Tooltip_register/Tooltip";
import { useNavigate } from "react-router-dom";
import SearchRecently from "../../../components/SearchRecently";
import React, { useState } from "react";
import ToolTip_Profile from "./ToolTip_Profile";
import { useAuth } from "../../../hooks/useAuth";

function Header_top() {
  let [recentlySearch, setRecentlySearch] = useState(
    JSON.parse(localStorage.getItem("recently-search")) || []
  );
  let [showMenuProfile, setShowMenuProfile] = useState(false);
  let [showRecentlySearch, setShowRecentlySearch] = useState(false);
  let navigate = useNavigate();
  let { isAuthenticated, userInfo } = useAuth();

  function handelSearch(event) {
    if (event.key === "Enter") {
      let value = event.target.value;
      if (value) {
        setRecentlySearch((prev) => {
          let newData = [
            ...prev,
            {
              title: value,
            },
          ];
          localStorage.setItem("recently-search", JSON.stringify(newData));
          return newData;
        });
        setTimeout(() => navigate(`/search/posts?s=${value}`), 500);
      }
    }
  }

  return (
    <React.Fragment>
      <header>
        <img src={Logo} alt="Logo Virgool" onClick={() => navigate("/")} />
        <div className="search_container">
          <input
            type="text"
            placeholder="جستجو در ویرگول..."
            onBlur={() =>
              setTimeout(() => setShowRecentlySearch((prev) => !prev), 200)
            }
            onFocus={() => setShowRecentlySearch((prev) => !prev)}
            onKeyUp={(e) => handelSearch(e)}
          />
          <IoSearchOutline className="Icon_search" />
          {showRecentlySearch && (
            <SearchRecently recentlySearch={recentlySearch} />
          )}
        </div>
        {isAuthenticated ? (
          <div className="container_profile_user_header">
            <img
              src={userInfo?.profile_url}
              onClick={() => setShowMenuProfile((prev) => !prev)}
            />
            {showMenuProfile && <ToolTip_Profile />}
          </div>
        ) : (
          <div className="btns_auth">
            <button
              className="register_btn"
              onClick={() => navigate("/register")}
            >
              ثبت نام
            </button>
            <TooltipRegister />
            <button className="login_btn" onClick={() => navigate("/login")}>
              ورود
            </button>
            <div className="btn_info">
              <FiInfo className="Icon_info_header" />
            </div>
          </div>
        )}
      </header>
    </React.Fragment>
  );
}

export default Header_top;
