function FnUploadCover(req, res) {
  if (!req.file) {
    return res.status(400).json({ message: "Cover Not find" });
  }
  res.status(200).json({
    message: "Upload SuccessFully Cover",
    file: req.file,
  });
}

module.exports = FnUploadCover;
