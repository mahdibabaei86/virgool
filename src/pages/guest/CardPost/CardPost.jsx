import "./CardPost.css";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import calculateReadingTime from "../../../method/calculateReadingTime";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { descriptionPreview } from "../../../method/descriptionPreview";

function CardPost({
  post_id,
  title,
  content,
  created_at,
  cover_url,
  category_name,
  count_like,
  count_comment,
  name_writer,
  profile_writer,
  isLike,
}) {
  let navigate = useNavigate();
  let { isAuthenticated } = useAuth();
  let QueryClient = useQueryClient();
  function handelToggleLike() {
    if (!isAuthenticated) {
      toast.error("ابتدا وارد شوید");
      navigate("/login/");
      return;
    }
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postID: post_id }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          QueryClient.invalidateQueries({ queryKey: ["posts"] });
        }
      });
  }

  function handelAddBookmark(postID) {
    if (!isAuthenticated) {
      toast.error("ابتدا وارد شوید");
      navigate("/login/");
      return;
    }
    fetch(
      `${process.env.REACT_APP_URL_BACKEND}api/posts/add-bookmark/${postID}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          navigate("/writer/bookmarks/");
        }
        if (result.status == 400) {
          toast.error("بوک مارک قبلا درج شده");
        }
      })
      .catch(() => toast.error("خطا در سمت سرور"));
  }

  return (
    <div className="post_item">
      <div className="info_header_post">
        <img src={profile_writer} />
        <span className="author_post">{name_writer}</span>
        <span className="created_at_post" dir="rtl">
          {created_at}
        </span>
      </div>
      <h3
        className="title_post"
        onClick={() => navigate(`/article?post-id=${post_id}`)}
      >
        {title}
      </h3>
      <p className="des_post" dir="rtl">
        {descriptionPreview(content)}
      </p>
      <img className="picture_post" src={cover_url} />
      <span className="time_reat_post">
        خواندن {calculateReadingTime(content)} دقیقه
      </span>
      <div className="container_relation_btn_post">
        <CiBookmark
          className="relation_btn_post"
          onClick={() => handelAddBookmark(post_id)}
        />
        <span>
          <span className="counter_btnrelation_post">{count_comment}</span>
          <MdOutlineModeComment className="relation_btn_post" />
        </span>
        <span>
          <span className="counter_btnrelation_post">{count_like}</span>
          <AiOutlineLike
            className="relation_btn_post"
            onClick={handelToggleLike}
            style={{ color: isLike ? "red !important" : "#6e6e6e !important" }}
          />
        </span>
      </div>
    </div>
  );
}

export default CardPost;
