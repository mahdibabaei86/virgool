let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

async function isLike(userID, postID) {
  let query = `SELECT 
user_id, 
post_id 
FROM post_likes
WHERE user_id = ? AND post_id = ?`;
  let [result] = await db.promise().query(query, [userID, postID]);
  return result.length !== 0 ? true : false;
}

function FnGetPosts(req, res) {
  let { userID } = req.query;
  let pageSize = 10;
  let page = req.query.page;
  let offset = (page - 1) * pageSize;

  db.query(
    `SELECT 
    p.id AS post_id,
    p.title,
    p.content,
    p.created_at,
    p.cover_url,
    u.username AS name_writer,
    u.profile_url AS profile_writer,
    cat.name AS category_name,
    COUNT(DISTINCT com.id) AS count_comment,
    COUNT(DISTINCT l.id) AS count_like,
    COUNT(DISTINCT v.id) AS views,
    (
        ((COUNT(DISTINCT com.id) + COUNT(DISTINCT l.id)) / GREATEST(DATEDIFF(NOW(), p.created_at), 1)) * 2 +
        ((COUNT(DISTINCT com.id) + COUNT(DISTINCT l.id)) / GREATEST(COUNT(DISTINCT v.id), 1)) * 1.5 +
        CASE 
            WHEN DATEDIFF(NOW(), p.created_at) < 1 THEN 1.5
            WHEN DATEDIFF(NOW(), p.created_at) BETWEEN 1 AND 3 THEN 1.2
            WHEN DATEDIFF(NOW(), p.created_at) BETWEEN 4 AND 7 THEN 1.0
            ELSE 0.8
        END +
        (COUNT(DISTINCT f.follower_id) / 1000) * 1.2
    ) AS score
FROM 
    posts p
LEFT JOIN 
    users u ON u.id = p.user_id
LEFT JOIN 
    categories cat ON p.category_id = cat.id
LEFT JOIN 
    view_posts v ON v.post_id = p.id
LEFT JOIN 
    post_likes l ON l.post_id = p.id
LEFT JOIN 
    comments com ON com.post_id = p.id
    LEFT JOIN
    user_follows f ON f.followed_id = u.id
GROUP BY 
     p.id, u.username, u.profile_url, cat.name, p.title, p.content, p.created_at, p.cover_url
ORDER BY 
    score DESC
LIMIT ?
OFFSET ?
;
`,
    [pageSize, offset],
    async (error, result) => {
      if (error) {
        console.log(error);
        return;
      }

      let posts = await Promise.all(
        result.map(async (post) => {
          let isLikePost = await isLike(userID, post.post_id);
          return {
            ...post,
            isLike: isLikePost,
            created_at: moment(post.created_at).fromNow(),
          };
        })
      );

      // calculating total items
      db.query(`SELECT COUNT(*) AS totalItems FROM posts`, (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        let totalItems = result[0].totalItems;
        let totalPages = Math.ceil(totalItems / pageSize);

        res.status(200).json({
          status: 200,
          page,
          pageSize,
          totalItems,
          totalPages,
          result: posts,
        });
      });
    }
  );
}

module.exports = FnGetPosts;
