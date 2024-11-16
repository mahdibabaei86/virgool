let db = require("../../database/connection");

async function FnAddBookmark(req, res) {
  let { postID } = req.params;
  let userID = req.info.id;
  db.query(
    `INSERT INTO bookmarks (user_id, post_id) VALUES (?,?);`,
    [userID, postID],
    (error, result) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.status(400).json({
            status: 400,
            message: "The post has already been bookmarked",
          });
          return;
        }
        res.status(500).json({
          status: 500,
          message: "Server Internal Error",
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "Add SuccessFully bookmark",
        });
      }
    }
  );
}

module.exports = FnAddBookmark;
