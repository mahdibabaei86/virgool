let db = require("../../database/connection");

function FnLike(req, res) {
  let { postID } = req.body;
  let userID = req.info.id;
  db.query(
    `INSERT INTO \`post_likes\`(\`user_id\`, \`post_id\`) VALUES (?,?)`,
    [userID, postID],
    async (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY") {
          let [unLikes] = await db
            .promise()
            .query(`DELETE FROM post_likes WHERE user_id = ? AND post_id = ?`, [
              userID,
              postID,
            ]);
          console.log(unLikes);
          res.status(201).json({
            status: 201,
            message: "UnLike SuccessFully",
          });
        }
        return;
      }
      res.status(201).json({
        status: 201,
        message: "Like SuccessFully",
      });
    }
  );
}

module.exports = FnLike;
