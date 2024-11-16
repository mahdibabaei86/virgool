let express = require("express");
const FnNewPost = require("../controllers/FnNewPost");
const FnLike = require("../controllers/FnLike");
const FnRemovePost = require("../controllers/FnRemovePost");
const FnEditPost = require("../controllers/FnEditPost");
const FnNewComment = require("../controllers/FnNewComment");
const FnUploadCover = require("../controllers/FnUploadCover");
let postsRoute = express.Router();
const multer = require("multer");
const path = require("path");
const FnFavorites = require("../controllers/FnFavorites");
const FnAddBookmark = require("../controllers/FnAddBookmark");
const FnGetBookmarks = require("../controllers/FnGetBookmarks");
const FnDeleteBookmark = require("../controllers/FnDeleteBookmark");
const FnCountViews = require("../controllers/FnCountViews");
const FnUploadCkeditor = require("../controllers/FnUploadCkeditor");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // مسیر ذخیره‌سازی فایل‌ها
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // نام فایل با افزودن زمان به نام اصلی فایل
  },
});

const upload2 = multer({
  storage: storage2,
  limits: { fileSize: 5242880 }, // محدودیت حجم به 5 مگابایت
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Only images (jpeg, jpg, png) are allowed!");
    }
  },
});

postsRoute.post("/new-post/", FnNewPost);
postsRoute.post("/delete-post/", FnRemovePost);
postsRoute.post("/edit-post/", FnEditPost);
postsRoute.post("/new-comment/", FnNewComment);
postsRoute.post(
  "/upload-cover/",
  upload.single("uploaded_cover_post"),
  FnUploadCover
);
postsRoute.post("/like/", FnLike);
postsRoute.get("/favorites/", FnFavorites);
postsRoute.get("/add-bookmark/:postID", FnAddBookmark);
postsRoute.get("/bookmarks/", FnGetBookmarks);
postsRoute.get("/delete-bookmark/:postID", FnDeleteBookmark);
postsRoute.post("/count_views/", FnCountViews);

module.exports = postsRoute;
