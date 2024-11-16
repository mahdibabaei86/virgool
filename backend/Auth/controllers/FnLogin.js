let JWT = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let database = require("../../database/connection");

let SECRETKEY = process.env.SECRETKEY;

let optionsCookie = {
  httpOnly: true,
  secure: false,
  maxAge: 1 * 24 * 60 * 60 * 1000,
};

function FnLogin(req, res) {
  let { username, password } = req.body;
  database.query(
    `SELECT \`id\`, \`username\`, \`password\`, \`status\`, \`role\` FROM \`users\` WHERE username = ?`,
    [username],
    (err, user) => {
      if (err) {
        return res
          .status(500)
          .json({ status: 500, message: "Internal Server Error" });
      }
      if (user.length === 0) {
        return res.status(400).json({
          status: 403,
          message: "User not found",
        });
      }
      let isPasswordValid = bcrypt.compareSync(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(403).json({
          status: 400,
          message: "The password is not valid",
        });
      }
      if (user[0].status === "banned") {
        return res
          .status(403)
          .json({ status: 403, message: "Account is banned" });
      }
      let token = JWT.sign({ ...user[0] }, SECRETKEY, { expiresIn: "1d" });
      res.cookie("token", token, optionsCookie).status(200).json({
        status: 200,
        message: "login SuccessFully",
        userID: user[0].id,
      });
    }
  );
}

module.exports = FnLogin;
