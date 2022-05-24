"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var _a = global.Config, MONGO_USER = _a.MONGO_USER, MONGO_PASSWORD = _a.MONGO_PASSWORD, MONGO_HOST = _a.MONGO_HOST, MONGO_PORT = _a.MONGO_PORT, MONGO_DB = _a.MONGO_DB;
var auth = MONGO_USER && MONGO_PASSWORD ? MONGO_USER + ':' + encodeURIComponent(MONGO_PASSWORD) + '@' : '';
var dbURI = "mongodb://".concat(auth).concat(MONGO_HOST, ":").concat(MONGO_PORT, "/").concat(MONGO_DB).concat(auth ? '?authSource=admin' : '');
mongoose_1.default.connect(dbURI, {})
    .then(function () {
    console.log('connected db');
})
    .catch(function (e) {
    console.log(e);
});
