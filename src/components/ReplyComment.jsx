import { AiOutlineLike } from "react-icons/ai";

import "./ReplyComment.css";

function ReplyComment({
  reply_id,
  reply_content,
  reply_created_at,
  fullname_reply_comment,
  profile_reply_comment,
}) {
  return (
    <div className="card_comment reply">
      <div className="author_comment">
        <img className="avatar_comment" src={profile_reply_comment} />
        <div className="info_comment">
          <span className="name_comment">{fullname_reply_comment}</span>
          <span className="created_comment">{reply_created_at}</span>
        </div>
      </div>
      <p className="des_comment">{reply_content}</p>
      {/* <div className="actions_comment">
        <AiOutlineLike className="icon_like" />
        <span className="counter_like">11</span>
      </div> */}
    </div>
  );
}

export default ReplyComment;
