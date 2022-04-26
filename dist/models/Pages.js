"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PageSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    thumbnail: { type: String },
    type: { type: Number }
});
var Pages = (0, mongoose_1.model)('pages', PageSchema);
exports.default = Pages;
