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

module.exports = FnUploadCkeditor;
