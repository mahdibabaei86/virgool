import "./CommectGuest.css";
import DefualtAvatar from "../images/default-avatar.jpg";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

function CommectGuest() {
  let { isAuthenticated } = useAuth();
  return (
    <div className="commect_guest">
      <div className="container_comment_guest">
        <span className="title_comment">پاسخ ها</span>
        <div className="container_input_comment_guest">
          <img src={DefualtAvatar} className="avatar_comment_guest" />
          <input
            type="text"
            placeholder="نظر خود را درباره این پست بنویسید"
            className="input_guest"
            onClick={() =>
              isAuthenticated || toast.error("برای ثبت دیدگاه وارد شوید")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CommectGuest;
