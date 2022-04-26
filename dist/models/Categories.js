"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CategoriesSchema = new mongoose_1.Schema({
    title: String,
    meta: String,
    thumbnail: String,
    slug: String,
    type: Number
}, { timestamps: true });
var Categories = (0, mongoose_1.model)('categories', CategoriesSchema);
exports.default = Categories;
