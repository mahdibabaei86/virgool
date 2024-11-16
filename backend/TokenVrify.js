let JWT = require("jsonwebtoken");
let SECRETKEY = process.env.SECRETKEY;

function TokenVrify(req, res, next) {
  let token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Access Denied. No Token Provided.",
    });
  }

  JWT.verify(token, SECRETKEY, (err, user) => {
    if (user?.role !== "writer") {
      return res.status(403).json({
        status: 403,
        message: "Invalid Token.",
      });
    }
    req.info = user;
    next();
  });
}

module.exports = TokenVrify;
