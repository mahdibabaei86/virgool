import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Posts() {
  let { userInfo } = useAuth();
  let [posts, setPosts] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/public/user/view/${userInfo.username}`
      )
        .then((res) => res.json())
        .then((result) => setPosts(result.result.posts));
    }
  }, [userInfo]);

  function handelDeletePost(postID) {
    let confirmDelete = window.confirm("ایا از حذف پست اطمینان دارید؟");
    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/delete-post/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postID: postID }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success(result.message);
          navigate("/writer/");
        })
        .catch(() => toast.error("Failed Publish Post"));
    }
  }

  return (
    <div className="container_page_panel_posts">
      <div className="header_posts_panel">
        <button onClick={() => navigate("/writer/new-post/")}>
          شروع نوشتن
        </button>
        <h1>پست‌های شما</h1>
      </div>
      <div className="list_card_posts">
        {posts &&
          posts.map((post) => {
            return (
              <div className="card_post" key={post.post_id}>
                <h2>{post.title}</h2>
                <span>آخرین ویرایش: {post.updated_at} </span>
                <div className="btns_action_post">
                  <button
                    className="btn_edit_post"
                    onClick={() =>
                      navigate(
                        `/writer/new-post?postID=${post.post_id}`
                      )
                    }
                  >
                    ویرایش پست
                  </button>
                  <button
                    className="btn_delete_post"
                    onClick={() => handelDeletePost(post.post_id)}
                  >
                    حذف پست
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
