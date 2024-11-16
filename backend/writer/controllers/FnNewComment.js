let db = require("../../database/connection");

function FnNewComment(req, res) {
  let { postID, parentPostID = null, content } = req.body;
  let userID = req.info.id;
  let query = `INSERT INTO \`comments\`(\`post_id\`, \`user_id\`, \`parent_id\`, \`content\`) VALUES (?,?,?,?)`;
  db.query(query, [postID, userID, parentPostID, content], (error, result) => {
    if (error) {
      return res.status(500).json({ status: 500, message: "Server error" });
    }

    res
      .status(201)
      .json({ status: 201, message: "New Comment Added successfully" });
  });
}

module.exports = FnNewComment;
