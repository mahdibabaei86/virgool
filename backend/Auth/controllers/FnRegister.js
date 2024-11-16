let db = require("../../database/connection");
let bcrypt = require("bcryptjs");

function FnRegister(req, res) {
  let { username, password, email } = req.body;
  let passwordHash = bcrypt.hashSync(password, 11);

  db.query(
    `INSERT INTO \`users\`(\`username\`, \`password\`, \`email\`, \`bio\`, \`profile_url\`, \`fullname\`, \`birthDay\`, \`gender\`, \`phone\`) VALUES (?,?,?,?,?,?,NULL,NULL,NULL)`,
    [
      username,
      passwordHash,
      email,
      "کاربر شاد ویرگول",
      "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
      "user virgool",
    ],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res.status(400).send({
            status: 400,
            message: "Username or email already exists.",
          });
        } else {
          res.status(400).send({
            status: 400,
            message: "Registration failed. Please try again.",
          });
        }
        return;
      }

      res.status(201).send({
        status: 201,
        message: "Create User SuccessFully",
      });
    }
  );
}

module.exports = FnRegister;
