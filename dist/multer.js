"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        var ext = path_1.default.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});
var uploadFile = (0, multer_1.default)({ storage: diskStorage }).single("file");
exports.default = uploadFile;
