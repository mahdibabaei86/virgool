let db = require("../database/connection");
let express = require("express");
let categoryRoute = express.Router();

function category(req, res) {
  db.query(`SELECT id, name, created_at FROM categories`, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    res.status(200).json({
      status: 200,
      result,
    });
  });
}

categoryRoute.get("/all/", category);

module.exports = categoryRoute;
