let db = require("../../database/connection");
const moment = require("moment");
require("moment/locale/fa");

function formatData(data, isFollow) {
  let userinfo = {
    user_id: data[0].user_id,
    username: data[0].username,
    email: data[0].email,
    bio: data[0].bio,
    profile_url: data[0].profile_url,
    fullname: data[0].fullname,
    follower_count: data[0].follower_count,
    following_count: data[0].following_count,
    isFollow,
    posts: data[0].post_id
      ? data.map((now) => {
          return {
            post_id: now.post_id,
            title: now.title,
            content: now.content,
            created_at: moment(now.created_at).fromNow(),
            updated_at: moment(now.updated_at).fromNow(),
            cover_url: now.cover_url,
            category_name: now.category_name,
            count_like: now.count_like,
            count_comment: now.count_comment,
          };
        })
      : null,
  };

  return userinfo;
}

function FnViewUser(req, res) {
  let username = req.params.username;
  db.query(
    `SELECT u.\`id\` AS user_id, u.\`username\`, u.\`email\`, u.\`bio\`, u.\`profile_url\`, u.\`fullname\`, p.id AS post_id, p.title,
p.content,
p.created_at,
p.updated_at,
p.cover_url,
c.name AS category_name,
COUNT(DISTINCT l.id) AS count_like,
COUNT(DISTINCT com.id) AS count_comment,
(SELECT COUNT(*) FROM user_follows WHERE followed_id = u.id) AS follower_count,
(SELECT COUNT(*) FROM user_follows WHERE follower_id = u.id) AS following_count
FROM \`users\` u
LEFT JOIN
posts p ON p.user_id = u.id
LEFT JOIN categories c ON p.category_id = c.id
LEFT JOIN post_likes l ON p.id = l.post_id
LEFT JOIN comments com ON com.post_id = p.id
WHERE u.username = ?
GROUP BY p.id;`,
    [username],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }

      let resultData = formatData(result, req.isFollow);

      res.status(200).json({
        status: 200,
        result: resultData,
      });
    }
  );
}

module.exports = FnViewUser;
