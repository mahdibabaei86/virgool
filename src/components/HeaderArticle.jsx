import "./HeaderArticle.css";
import Logo from "../images/virgool-logo.png";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

function HeaderArticle() {
  return (
    <header className="header_article">
      <img src={Logo} className="logo_header_article" />
      <div className="container_left_header_article">
        <IoNotificationsOutline className="notification_icon" />
        <FaSearch className="search_icon" />
        <img
          src="https://files.virgool.io/upload/users/11289/avatar/oFC4mN.jpeg?height=120&width=120"
          className="profile_header_article"
        />
      </div>
    </header>
  );
}

export default HeaderArticle;
