const FnSearchPost = require("./controllers/FnSearchPost");
const FnSearchUsers = require("./controllers/FnSearchUsers");
let express = require("express");
let PublicRouteSearch = express.Router();

PublicRouteSearch.get("/users/", FnSearchUsers);
PublicRouteSearch.get("/posts/", FnSearchPost);

module.exports = PublicRouteSearch;
