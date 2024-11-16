import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import "./CommentBox.css";
import { commentContext } from "../../contexts/CommentContext";

function CommentBox({ postID, getComments }) {
  let [inputComment, setInputComment] = useState("");
  let { infoReply, setInfoReply } = useContext(commentContext);

  function handelSendComment() {
    let comment = {
      postID: Number(postID),
      parentPostID: infoReply?.commentID || null,
      content: inputComment,
    };

    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/new-comment/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          setInputComment("");
          setInfoReply(null);
          getComments();
          toast.success("دیدگاه با موفقیت ثبت شد");
        }
      });
  }

  return (
    <div className="container_comment_box">
      <div className="header_info_user">
        <img src="https://files.virgool.io/upload/users/3003412/avatar/avatar.png?width=72&height=72" />
        <span>Mahdi Babaei</span>
        {infoReply && (
          <span className="name_reply" dir="rtl">
            پاسخ به {infoReply.name}
          </span>
        )}
      </div>
      <div className="suggestion_comment_box">
        <span onClick={() => setInputComment("اش کاش")}>...ای کاش</span>
        <span onClick={() => setInputComment("از مطلب شما بسیار لذت بردم اما")}>
          ...ازمطلب شما بسیار لذت بردم اما
        </span>
        <span onClick={() => setInputComment("مفید بود ولی")}>
          ...مفید بود ولی
        </span>
        <span onClick={() => setInputComment("میخواهم بدانم که")}>
          ...میخواهم بدانم که
        </span>
        <span onClick={() => setInputComment("اگر این پست")}>
          ...اگر این پست
        </span>
      </div>
      <textarea
        rows="4"
        cols="50"
        className="input_comment_box"
        placeholder="نظر خود را بنویسید"
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
      ></textarea>
      <div className="footer_comment_box">
        <button
          className="btn_cancel_comment"
          onClick={() => {
            setInfoReply(null);
            setInputComment("");
          }}
        >
          منصرف شدم
        </button>
        <button
          className={
            inputComment.length == 0
              ? "btn_send_message_comment disable_send_box_message"
              : "btn_send_message_comment"
          }
          onClick={handelSendComment}
          disabled={inputComment.length == 0}
        >
          ارسال نظر
        </button>
      </div>
    </div>
  );
}

export default CommentBox;
