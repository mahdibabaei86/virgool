let db = require("../../database/connection");

async function FnDeleteBookmark(req, res) {
  let { postID } = req.params;
  let userID = req.info.id;
  let [result] = await db
    .promise()
    .query(`DELETE FROM bookmarks WHERE user_id = ? AND post_id = ?`, [
      userID,
      postID,
    ])
    .catch(() => {
      res.status(500).json({
        status: 500,
        message: "Error Internal Server",
      });
      return;
    });

  if (result.affectedRows == 0) {
    res.status(401).json({
      status: 401,
      message: "Failed delete Bookmark",
    });
    return;
  }

  res.status(201).json({
    status: 201,
    message: "Delete SuccessFully Bookmark",
  });
}

module.exports = FnDeleteBookmark;
