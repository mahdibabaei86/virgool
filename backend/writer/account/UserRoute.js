let express = require("express");
const FnViewProfile = require("../controllers/FnViewProfile");
const FnFollow = require("../controllers/FnFollow");
const FnChartDetail = require("../controllers/FnChartDetail");
let UserRoute = express.Router();

UserRoute.get("/view/:UserID/", FnViewProfile);
UserRoute.get("/follow/:UserID/", FnFollow);
UserRoute.get("/chart-detail/", FnChartDetail);

module.exports = UserRoute;
