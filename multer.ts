import multer from 'multer'
import path from 'path'
let diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + ext)
  }
});
let uploadFile = multer({ storage: diskStorage }).single("file");

export default uploadFile