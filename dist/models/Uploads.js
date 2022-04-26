"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UploadSchema = new mongoose_1.Schema({
    path: { type: String }
});
var Uploads = (0, mongoose_1.model)('uploads', UploadSchema);
exports.default = Uploads;
