"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BannerSchema = new mongoose_1.Schema({
    img: { type: String },
    text: { type: String },
    order: { type: Number },
    link: { type: String }
});
var Banners = (0, mongoose_1.model)('banners', BannerSchema);
exports.default = Banners;
