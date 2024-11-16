import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./ActionsTabPost.css";

function ActionsTabPost() {
  let navigate = useNavigate();
  let location = useLocation();
  let isRoot =
    location.pathname === "/" && !location.search.includes("feed=latest");
  let isLatest = location.search.includes("feed=latest");

  return (
    <div className="container_actions_tab_post">
      <div className="actions_tab_post">
        <Link to="/" className={isRoot ? "active" : ""}>
          پست‌های منتخب برای شما
        </Link>
        <Link to="/?feed=latest" className={isLatest ? "active" : ""}>
          جدیدترین پست‌ها
        </Link>
        <FaPlus className="Choose_category" onClick={() => navigate("/interests")} />
      </div>
    </div>
  );
}

export default ActionsTabPost;
