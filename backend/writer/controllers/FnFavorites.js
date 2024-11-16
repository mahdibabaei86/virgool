let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

function FnFavorites(req, res) {
  let userID = req.info.id;
  db.query(
    `SELECT p.id,
p.title,
p.content,
p.created_at,
p.cover_url,
COUNT(DISTINCT l2.id) AS count_like,
COUNT(DISTINCT com.id) AS count_comment,
u2.username AS name_writer,
u2.profile_url AS profile_writer
FROM post_likes l
JOIN users u ON u.id = l.user_id
JOIN posts p ON p.id = l.post_id
JOIN users u2 ON u2.id = p.user_id
LEFT JOIN comments com ON com.post_id = p.id
LEFT JOIN post_likes l2 ON l2.post_id = p.id
WHERE u.id = ?
GROUP BY p.id;`,
    [userID],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }

      let posts = result.map((post) => {
        return { ...post, created_at: moment(post.created_at).fromNow() };
      });

      res.status(200).json({
        status: 200,
        result: posts,
      });
    }
  );
}

module.exports = FnFavorites;
