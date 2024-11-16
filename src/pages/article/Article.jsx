import ProgressBar from "react-scroll-progress-bar";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import SliderChosenPost from "../../components/Slider_Chosen_Post";
import CommectGuest from "../../components/CommectGuest";
import Comment from "../../components/Comment";
import { IoEye } from "react-icons/io5";
import HeaderTop from "../guest/header_top/Header_top";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import calculateReadingTime from "../../method/calculateReadingTime";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useAuth } from "../../hooks/useAuth";
import CommentBox from "../components/CommentBox";
import CommentContxtProvier from "../../contexts/CommentContext";
import { useComments } from "../../hooks/useComments";
import BtnFollow from "../components/BtnFollow";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./Article.css";

const transformOembedToIframe = (html) => {
  // ایجاد یک DOM جدید برای ویرایش HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // پیدا کردن تمام تگ‌های <oembed> و جایگزینی با <iframe>
  const oembedTags = doc.querySelectorAll("oembed");
  oembedTags.forEach((tag) => {
    const url = tag.getAttribute("url");
    if (url) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", url);
      iframe.setAttribute("width", "600");
      iframe.setAttribute("height", "321");
      iframe.setAttribute("frameBorder", "0");
      iframe.style.borderRadius = "11px";
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      );
      iframe.setAttribute("allowFullScreen", "true");

      // جایگزینی <oembed> با <iframe>
      tag.parentNode.replaceChild(iframe, tag);
    }
  });

  return doc.body.innerHTML;
};

function Article() {
  let location = useLocation();
  let QueryClient = useQueryClient();
  let postID = new URLSearchParams(location.search).get("post-id");
  let [content, setContent] = useState(null);
  let navigate = useNavigate();
  let { isAuthenticated, userInfo, userID } = useAuth();
  let { comments, getComments } = useComments(postID);

  let { data } = useQuery({
    queryKey: ["article"],
    queryFn: async function () {
      if (userID) {
        let fetchData = await fetch(
          `${process.env.REACT_APP_URL_BACKEND}api/public/posts/${postID}?followerID=${userID}`
        );
        return fetchData.json();
      } else {
        let fetchData = await fetch(
          `${process.env.REACT_APP_URL_BACKEND}api/public/posts/${postID}/`
        );
        return fetchData.json();
      }
    },
  });

  useEffect(() => {
    setContent(data?.result[0]);
    getComments();
  }, [userInfo, data]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/count_views/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postID }),
      credentials: "include",
    })
      .then(() => {
        console.log("Request completed successfully");
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  function handelToggleFollow(followedID) {
    if (!isAuthenticated) {
      toast.error("ابتدا وارد شوید");
      return;
    }
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/user/follow/${followedID}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          setContent((prev) => ({ ...prev, isFollow: !prev.isFollow }));
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
      body: JSON.stringify({ postID }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          QueryClient.invalidateQueries({ queryKey: ["article"] });
        }
      });
  }

  return (
    <section className="article">
      <Helmet>
        <title>{content ? content.title : "بارگذاری..."}</title>
      </Helmet>
      <ProgressBar height="3" bgcolor="#4095CB" duration="0.1" />
      <HeaderTop />
      <div className="article_content">
        <div className="article_info_author">
          <div className="author_avatar">
            <a href="#">
              <img src={content?.profile_writer} />
            </a>
          </div>
          <div className="info_author">
            <a href="#" className="name_author">
              {content?.fullname}
            </a>
            <span>{content?.bio}</span>
            <span>
              {` خواندن ${
                content?.content && calculateReadingTime(content?.content)
              } دقیقه` + ` / ${content?.created_at && content?.created_at}`}
            </span>
            {userInfo?.id !== content?.user_id && (
              <BtnFollow
                user_id={content?.user_id}
                isFollow={content?.isFollow}
                handelToggleFollow={handelToggleFollow}
              />
            )}
          </div>
          <div className="container_counter_view">
            <span>{content?.views_count}</span>
            <IoEye className="counter_view" />
          </div>
        </div>
        <div className="article_body">
          <h1>{content?.title}</h1>
          <img src={content?.cover_url} className="cover_article" />
          <div
            className="body_article_page"
            dangerouslySetInnerHTML={{
              __html: transformOembedToIframe(content?.content),
            }}
          ></div>
        </div>
        <div className="footer_article">
          <div className="tags_article">
            <span className="tag_article">جاوا اسکریپت</span>
            <span className="tag_article">جاوا اسکریپت</span>
            <span className="tag_article">جاوا اسکریپت</span>
            <span className="tag_article">برنامه نویسی</span>
            <span className="tag_article">برنامه نویسی</span>
            <span className="tag_article">برنامه نویسی</span>
          </div>
          <div className="article_actions">
            <div className="article_actions_right">
              <FaRegBookmark
                className="btn_bookmark"
                onClick={() => handelAddBookmark(postID)}
              />
              <span className="btn_message">
                <span>{content?.comments_count} نظر</span>
                <LuMessageSquare />
              </span>
              <span className="btn_like">
                <span>{content?.likes_count}</span>
                <AiOutlineLike onClick={handelToggleLike} />
              </span>
            </div>
            <div className="article_actions_left">
              <div className="link_post">
                <input
                  type="text"
                  className="url_link_post"
                  value={window.location.href}
                />

                <IoIosCopy
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("آدرس مقاله کپی شد");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="article_chosen">
            <SliderChosenPost shadow={true} />
          </div>
        </div>
      </div>
      <CommentContxtProvier>
        <div className="container_comment">
          {isAuthenticated ? (
            <CommentBox postID={postID} getComments={getComments} />
          ) : (
            <CommectGuest />
          )}
          <div className="list_comments">
            {comments?.map((com) => {
              return <Comment {...com} />;
            })}
          </div>
        </div>
      </CommentContxtProvier>
    </section>
  );
}

export default Article;
