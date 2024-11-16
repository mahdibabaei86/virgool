import { AiOutlineLike } from "react-icons/ai";
import { FaReply } from "react-icons/fa6";
import ReplyComment from "./ReplyComment";

import "./Comment.css";
import { useContext } from "react";
import { commentContext } from "../contexts/CommentContext";

function Comment({
  comment_id,
  content,
  created_at,
  fullname_comment,
  parent_id,
  profile_comment,
  replies,
}) {
  let { setInfoReply } = useContext(commentContext);

  return (
    <div className="card_comment">
      <div className="author_comment">
        <img className="avatar_comment" src={profile_comment} />
        <div className="info_comment">
          <span className="name_comment">{fullname_comment}</span>
          <span className="created_comment" dir="rtl">
            {created_at}
          </span>
        </div>
      </div>
      <p className="des_comment">{content}</p>
      <div className="actions_comment">
        {/* <AiOutlineLike className="icon_like" />
        <span className="counter_like">11</span> */}
        <FaReply
          className="icon_reply"
          onClick={() => {
            setInfoReply({
              commentID: comment_id,
              name: fullname_comment,
            });
          }}
        />
      </div>
      <div className="comments_reply">
        {replies &&
          replies.map((reply) => {
            return <ReplyComment {...reply} />;
          })}
      </div>
    </div>
  );
}

export default Comment;
