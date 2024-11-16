let express = require("express");
const FnGetPosts = require("./controllers/FnGetPosts");
const FnGetPost = require("./controllers/FnGetPost");
const FnGetComments = require("./controllers/FnGetComments");
const FnCountViews = require("./controllers/FnCountViews");
let path = require("path");
let multer = require("multer");
let publicRoutePost = express.Router();

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
function FnUploadCkeditor(req, res) {
  if (req.file) {
    res.json({
      uploaded: true,
      url: `http://localhost:5000/uploads/${req.file.filename}`,
    });
  } else {
    res.json({
      uploaded: false,
      error: {
        message: "File upload failed.",
      },
    });
  }
}
publicRoutePost.get("/all/", FnGetPosts);
publicRoutePost.get("/:postID/", FnGetPost);
publicRoutePost.get("/comments/:postID/", FnGetComments);
// publicRoutePost.post("/count_views/", FnCountViews);
publicRoutePost.post("/upload/", upload2.single("upload"), FnUploadCkeditor);

module.exports = publicRoutePost;
