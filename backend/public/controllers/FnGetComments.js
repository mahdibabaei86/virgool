let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

function FnGetComments(req, res) {
  let { postID } = req.params;
  db.query(
    `SELECT 
com.id, 
com.parent_id,
com.content,
com.created_at,
u1.fullname AS fullname_comment,
u1.profile_url AS profile_comment,
u2.fullname AS fullname_reply_comment,
u2.profile_url AS profile_reply_comment,
c2.id AS reply_id, 
c2.content AS reply_content, 
c2.user_id AS reply_user_id, 
c2.created_at AS reply_created_at
FROM comments com
LEFT JOIN users u1 ON u1.id = com.user_id
LEFT JOIN comments c2 ON c2.parent_id = com.id
LEFT JOIN users u2 ON u2.id = c2.user_id
WHERE com.post_id = ? AND com.parent_id IS NULL;`,
    [postID],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }

      // ایجاد یک Map برای گروه‌بندی کامنت‌ها و پاسخ‌های مرتبط
      const commentsMap = new Map();

      result.forEach((item) => {
        const {
          id,
          parent_id,
          content,
          created_at,
          fullname_comment,
          profile_comment,
        } = item;
        const reply = {
          reply_id: item.reply_id,
          reply_content: item.reply_content,
          reply_created_at: moment(item.reply_created_at).fromNow(),
          fullname_reply_comment: item.fullname_reply_comment,
          profile_reply_comment: item.profile_reply_comment,
        };

        if (!commentsMap.has(id)) {
          // افزودن کامنت اصلی با ساختار اولیه و ایجاد آرایه خالی برای پاسخ‌ها
          commentsMap.set(id, {
            comment_id: id,
            parent_id: parent_id,
            content: content,
            created_at: moment(created_at).fromNow(),
            fullname_comment: fullname_comment,
            profile_comment: profile_comment,
            replies: [], // آرایه‌ای برای ذخیره پاسخ‌ها
          });
        }

        // افزودن پاسخ‌ها به آرایه replies در صورت وجود
        if (reply.reply_id) {
          commentsMap.get(id).replies.push(reply);
        }
      });

      // تبدیل Map به آرایه نهایی
      const structuredComments = Array.from(commentsMap.values());

      res.status(200).json({
        status: 200,
        result: structuredComments,
      });
    }
  );
}

module.exports = FnGetComments;
