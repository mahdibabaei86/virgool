let db = require("../../database/connection");

function unFollowUser(unFollowUser, Usermain, res) {
  db.query(
    `DELETE FROM user_follows WHERE follower_id = ? AND followed_id = ?`,
    [Usermain, unFollowUser],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      res.status(201).json({
        status: 201,
        message: "unFollow User SuccessFully",
      });
    }
  );
}

function FnFollow(req, res) {
  let { UserID } = req.params;
  let FollowerID = req.info.id;
  let queryFollow = `INSERT INTO user_follows (follower_id, followed_id) VALUES (?,?)`;
  if (FollowerID == UserID) {
    res.status(401).json({
      status: 401,
      message: "You can't follow yourself",
    });
    return;
  }
  db.query(queryFollow, [FollowerID, UserID], (error, result) => {
    if (error) {
      if (error.code == "ER_DUP_ENTRY") {
        unFollowUser(UserID, FollowerID, res);
      }
      console.log(error);
      return;
    }
    res.status(201).json({
      status: 201,
      message: "Follow User SuccessFully",
    });
  });
}

module.exports = FnFollow;
