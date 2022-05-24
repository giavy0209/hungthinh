"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var NewsSchema = new mongoose_1.Schema({
    title: String,
    meta: String,
    thumbnail: String,
    slug: String,
    content: String,
    categories: { type: mongoose_1.Schema.Types.ObjectId, ref: 'categories' },
    type: Number
}, { timestamps: true });
var News = (0, mongoose_1.model)('news', NewsSchema);
exports.default = News;
