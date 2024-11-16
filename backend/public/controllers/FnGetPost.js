let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

async function isFollowUser(followerID, post) {
  try {
    const [result] = await db.promise().query(
      `SELECT uf.follower_id, 
              u.username AS followed
       FROM user_follows uf
       JOIN users u ON u.id = uf.followed_id
       WHERE uf.follower_id = ? AND u.username = ?;`,
      [followerID, post[0].name_writer]
    );

    return result.length !== 0 ? true : false;
  } catch (error) {
    console.log(error);
  }
}

function FnGetPost(req, res) {
  let { postID } = req.params;
  let { followerID } = req.query;
  db.query(
    `SELECT p.id AS post_id, 
p.title, 
p.content, 
p.created_at, 
p.updated_at,
u.fullname,
cat.name AS category_name,
p.category_id,
p.cover_url,
p.user_id, 
u.username AS name_writer,
u.bio,
u.profile_url AS profile_writer,
COUNT(DISTINCT v.id) AS views_count,
COUNT(DISTINCT l.id) AS likes_count,
COUNT(DISTINCT com.id) AS comments_count
FROM posts p
JOIN users u ON u.id = p.user_id
JOIN categories cat ON cat.id = p.category_id
LEFT JOIN view_posts v ON v.post_id = p.id
LEFT JOIN post_likes l ON l.post_id = p.id
LEFT JOIN comments com ON com.post_id = p.id
WHERE p.id = ?
GROUP BY p.id;`,
    [postID],
    async (error, result) => {
      if (error) {
        console.log(error);
        return;
      }

      let isFollow = await isFollowUser(followerID, result);

      let post = [
        {
          ...result[0],
          isFollow,
          created_at: moment(result[0].created_at).fromNow(),
          updated_at: moment(result[0].updated_at).fromNow(),
        },
      ];

      res.status(200).json({
        status: 200,
        result: post,
      });
    }
  );
}

module.exports = FnGetPost;
