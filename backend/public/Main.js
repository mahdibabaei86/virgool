let express = require("express");
const PublicRouteSearch = require("./Search");
const publicRoutePost = require("./posts");
const PublicRouteUsers = require("./users");
const categoryRoute = require("./category");
let PublicRoute = express.Router();

PublicRoute.use("/search/", PublicRouteSearch);
PublicRoute.use("/user/", PublicRouteUsers);
PublicRoute.use("/posts/", publicRoutePost);
PublicRoute.use("/categorys/", categoryRoute);

module.exports = PublicRoute;
