import { FaPlus } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";

import "./BtnFollow.css";

function BtnFollow({ user_id, isFollow, handelToggleFollow }) {
  return (
    <button
      className={isFollow ? "btn_follow_user follow" : "btn_follow_user"}
      onClick={() => handelToggleFollow(user_id)}
    >
      {isFollow ? (
        <AiOutlineCheck className="icon_follow_profile_view" />
      ) : (
        <FaPlus className="icon_follow_profile_view" />
      )}
      <span>{isFollow ? "دنبال شده" : "دنبال کنید"}</span>
    </button>
  );
}

export default BtnFollow;
