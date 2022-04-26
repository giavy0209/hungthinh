"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var routers_1 = __importDefault(require("routers"));
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
require("config");
require("helpers/connectDB");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ limit: '50mb', extended: true }));
app.use(express_1.default.static('public'));
app.use('/', routers_1.default);
app.set('view engine', 'ejs');
app.get('/admin', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'admin', 'index.html'));
});
app.get('/admin/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'admin', 'index.html'));
});
var server = http_1.default.createServer(app);
server.listen(global.Config.PORT);
