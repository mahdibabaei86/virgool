import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import "./ToolTip_Profile.css";
import { useNavigate } from "react-router-dom";

function ToolTip_Profile() {
  let navigate = useNavigate();
  let { logout, userInfo } = useAuth();

  function handelLogout() {
    logout();
    toast.error("Logout SuccessFully");
  }

  return (
    <div className="tooltip_user_profile">
      <div
        className="tooltip_user_profile_header"
        onClick={() => navigate(`/profile-user?u=${userInfo.username}`)}
      >
        <img src={userInfo?.profile_url} />
        <div className="info_name_tooltip_profile">
          <span className="name_profile">{userInfo?.username}</span>
          <span className="btn_show_profile">مشاهده پروفایل</span>
        </div>
      </div>
      <ul className="list_tooltip_user_profile">
        <li onClick={() => navigate("/writer/new-post/")}>نوشتن پست جدید</li>
        <li onClick={() => navigate("/writer/settings/account")}>
          تنظیمات حساب کاربری
        </li>
        <li onClick={() => navigate("/writer/posts")}>پست ها</li>
        <li>مشاهده آمار</li>
        <li onClick={() => navigate("/interests/")}>علاقه‌مندی‌های من</li>
        <li onClick={() => navigate("/writer/favorites/")}>
          پست‌های مورد علاقه
        </li>
        <li onClick={() => navigate("/writer/bookmarks/")}>بوک مارک ها</li>
      </ul>
      <span className="btn_tooltip_close" onClick={handelLogout}>
        خروج
      </span>
    </div>
  );
}

export default ToolTip_Profile;
