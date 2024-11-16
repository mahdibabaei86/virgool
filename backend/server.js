require("dotenv").config();
let express = require("express");
let database = require("./database/connection");
let AuthRoute = require("./Auth/Auth");
let cookieParser = require("cookie-parser");
const postsRoute = require("./writer/posts/posts");
const TokenWriter = require("./TokenVrify");
const UserRoute = require("./writer/account/UserRoute");
const PublicRoute = require("./public/Main");
let rateLimit = require("express-rate-limit");
let path = require("path");
let cors = require("cors");
let app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

app.use(limiter);

app.use("/uploads/", express.static(path.join(__dirname, "./uploads/")));

app.use(cookieParser());

app.use(express.json());

database.connect((error) => {
  if (error) {
    console.log("Faild Connect Database");
    return;
  }
  console.log("connect SuccessFully Database");
});

let PORT = process.env.PORT;

app.use("/api/auth", AuthRoute);
app.use("/api/posts", TokenWriter, postsRoute);
app.use("/api/public", PublicRoute);
app.use("/api/user/", TokenWriter, UserRoute);

app.listen(PORT, () => {
  console.log(`server running port ${PORT}`);
});
