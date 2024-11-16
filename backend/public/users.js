let db = require("../database/connection");
const FnViewUser = require("./controllers/FnViewUser");
let express = require("express");
let PublicRouteUsers = express.Router();

PublicRouteUsers.use((req, res, next) => {
  let { userFollower = null, userFollowd } = req.query;
  db.query(
    `SELECT uf.follower_id, 
u.username AS followed
FROM user_follows uf
JOIN users u ON u.id = uf.followed_id
WHERE uf.follower_id = ? AND u.username = ?;`,
    [userFollower, userFollowd],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      req.isFollow = result.length !== 0 ? true : false;
    }
  );
  next();
});

PublicRouteUsers.get("/view/:username/", FnViewUser);

module.exports = PublicRouteUsers;
