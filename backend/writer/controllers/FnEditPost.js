let db = require("../../database/connection");

function FnEditPost(req, res) {
  let { postID, title, content, category, cover } = req.body;
  let userID = req.info.id;
  db.query(
    `UPDATE \`posts\` SET \`title\`=?,\`content\`=?,\`category_id\`=?,\`cover_url\`=? WHERE user_id = ? AND id = ?`,
    [title, content, category, cover, userID, postID],
    (err, result) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Server error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          message: "Post not found or you do not have permission to edit it",
        });
      }

      res.status(200).json({ status: 200, message: "Post edit successfully" });
    }
  );
}

module.exports = FnEditPost;