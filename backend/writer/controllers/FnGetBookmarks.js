let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

async function FnGetBookmarks(req, res) {
  let userID = req.info.id;
  let [result] = await db.promise().query(
    `SELECT 
    p.id,
    p.title,
p.content,
p.created_at,
p.cover_url
FROM bookmarks b
LEFT JOIN posts p ON p.id = b.post_id
WHERE b.user_id = ?;`,
    [userID]
  );

  let posts = result.map((post) => {
    return { ...post, created_at: moment(post.created_at).fromNow() };
  });

  res.status(200).json({
    status: 200,
    result: posts,
  });
}

module.exports = FnGetBookmarks;
