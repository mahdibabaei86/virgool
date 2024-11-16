let db = require("../../database/connection");

function FnNewPost(req, res) {
  let { title, content, category, cover } = req.body;
  let userID = req.info.id;

  db.query(
    `INSERT INTO \`posts\`(\`user_id\`, \`title\`, \`content\`, \`category_id\`, \`cover_url\`) VALUES (?,?,?,?,?)`,
    [userID, title, content, category, cover],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(201).json({
        status: 201,
        message: "Create SuccessFully Post",
      });
    }
  );
}

module.exports = FnNewPost;