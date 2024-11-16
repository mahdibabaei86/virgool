let db = require("../../database/connection");

function FnViewProfile(req, res) {
  let userID = req.params.UserID;
  db.query(
    `SELECT \`id\`, \`username\`, \`email\`, \`create_At\`, \`status\`, \`role\`, \`bio\`, \`profile_url\`, \`fullname\`, \`birthDay\`, \`gender\`, \`phone\` FROM \`users\` WHERE id = ?`,
    [userID],
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      res.status(200).json({
        status: 200,
        result: { ...result[0], expToken: req.info.exp },
      });
    }
  );
}

module.exports = FnViewProfile;
