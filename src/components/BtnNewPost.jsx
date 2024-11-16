import { useNavigate } from "react-router-dom";
import "./BtnNewPost.css";

function BtnNewPost() {
  let navigate = useNavigate();
  return (
    <span className="btn_new_post" onClick={() => navigate("/writer/new-post")}>
      نوشتن پست
    </span>
  );
}

export default BtnNewPost;
