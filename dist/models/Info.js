"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var InfoSchema = new mongoose_1.Schema({
    name: String,
    content: String,
    email: String,
    phone: String
});
var Banners = (0, mongoose_1.model)('infos', InfoSchema);
exports.default = Banners;
