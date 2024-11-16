let express = require("express");
const FnRegister = require("./controllers/FnRegister");
const FnLogin = require("./controllers/FnLogin");
let AuthRoute = express.Router();

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ValidateInput(req, res, next) {
  let { password, email } = req.body;
  if (!emailRegex.test(email)) {
    res.status(400).send({
      status: 400,
      message: "Invalid email format.",
    });
    return;
  }
  if (!passwordRegex.test(password)) {
    res.status(400).send({
      status: 400,
      message:
        "Password must include upper and lower case letters, numbers, and special characters.",
    });
    return;
  }
  next();
}

AuthRoute.post("/register/", ValidateInput, FnRegister);

AuthRoute.post("/login/", FnLogin);

module.exports = AuthRoute;
