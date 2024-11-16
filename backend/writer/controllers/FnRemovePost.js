let db = require("../../database/connection");

function FnRemovePost(req, res) {
  let { postID } = req.body;
  let userID = req.info.id;
  db.query(
    "DELETE FROM `posts` WHERE user_id = ? AND id = ?",
    [userID, postID],
    (err, result) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Server error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          message: "Post not found or you do not have permission to delete it",
        });
      }

      res
        .status(201)
        .json({ status: 201, message: "Post deleted successfully" });
    }
  );
}

module.exports = FnRemovePost;
