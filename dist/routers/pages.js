"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var models_1 = require("models");
var router = (0, express_1.Router)();
var getCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var project, news;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.Categories.find({ type: 1 })];
            case 1:
                project = _a.sent();
                return [4 /*yield*/, models_1.Categories.find({ type: 2 })];
            case 2:
                news = _a.sent();
                return [2 /*return*/, { project: project, news: news }];
        }
    });
}); };
var getNews = function (_a) {
    var _b = _a.skip, skip = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 5 : _c, _d = _a.categories, categories = _d === void 0 ? '' : _d, _e = _a.categoriesType, categoriesType = _e === void 0 ? 1 : _e;
    return __awaiter(void 0, void 0, void 0, function () {
        var query, news;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    query = { "categories.type": categoriesType };
                    if (categories)
                        query["categories.slug"] = categories;
                    return [4 /*yield*/, models_1.News.aggregate([
                            { $match: {} },
                            {
                                $lookup: {
                                    from: 'categories',
                                    localField: "categories",
                                    foreignField: '_id',
                                    as: 'categories'
                                }
                            },
                            { $unwind: { path: '$categories' } },
                            { $match: query },
                            { $skip: skip },
                            { $sort: { _id: -1 } },
                            { $limit: limit },
                        ])];
                case 1:
                    news = _f.sent();
                    return [2 /*return*/, news];
            }
        });
    });
};
var getBanner = function () { return __awaiter(void 0, void 0, void 0, function () {
    var banners;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.Banners.find({})
                    .sort({ _id: -1 })];
            case 1:
                banners = _a.sent();
                return [2 /*return*/, banners];
        }
    });
}); };
var getNew = function (slug) { return __awaiter(void 0, void 0, void 0, function () {
    var news;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.News.findOne({ slug: slug })];
            case 1:
                news = _a.sent();
                return [2 /*return*/, news];
        }
    });
}); };
router.route('/')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, news, project, newProject, newNews, banners;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                return [4 /*yield*/, getNews({ categoriesType: 1, limit: 6 })];
            case 2:
                newProject = _b.sent();
                return [4 /*yield*/, getNews({ categoriesType: 2, limit: 5 })];
            case 3:
                newNews = _b.sent();
                console.log(newNews);
                return [4 /*yield*/, getBanner()];
            case 4:
                banners = _b.sent();
                res.render('client/pages/index', { news: news, project: project, newProject: newProject, newNews: newNews, banners: banners });
                return [2 /*return*/];
        }
    });
}); });
router.route('/gioi-thieu')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, news, project;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                res.render('client/pages/gioithieu', { news: news, project: project, });
                return [2 /*return*/];
        }
    });
}); });
router.route('/lien-he')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, news, project;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                res.render('client/pages/lien-he', { news: news, project: project, });
                return [2 /*return*/];
        }
    });
}); })
    .post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                console.log(body);
                return [4 /*yield*/, models_1.Info.create(__assign({}, req.body))];
            case 1:
                _a.sent();
                res.redirect('/lien-he');
                return [2 /*return*/];
        }
    });
}); });
router.route('/doi-tac')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, news, project;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                res.render('client/pages/doi-tac', { news: news, project: project, });
                return [2 /*return*/];
        }
    });
}); });
router.route('/du-an/:projectId?')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var projectId, _a, news, project, allNews;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectId = req.params.projectId;
                return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                return [4 /*yield*/, getNews({ limit: 9999, categoriesType: 1, categories: projectId })];
            case 2:
                allNews = _b.sent();
                res.render('client/pages/du-an', { news: news, project: project, allNews: allNews });
                return [2 /*return*/];
        }
    });
}); });
router.route('/du-an/:projectId/:newsId')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var projectId, newsId, _a, news, project, allNews, newsDetail;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectId = req.params.projectId;
                newsId = req.params.newsId;
                return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                return [4 /*yield*/, getNews({ limit: 6, categoriesType: 1, categories: projectId })];
            case 2:
                allNews = _b.sent();
                return [4 /*yield*/, getNew(newsId)];
            case 3:
                newsDetail = _b.sent();
                res.render('client/pages/du-an-detail', { news: news, project: project, allNews: allNews, newsDetail: newsDetail });
                return [2 /*return*/];
        }
    });
}); });
router.route('/tin-tuc/:categoriesId?')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoriesId, _a, news, project, allNews;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                categoriesId = req.params.categoriesId;
                return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                return [4 /*yield*/, getNews({ limit: 6, categoriesType: 2, categories: categoriesId })];
            case 2:
                allNews = _b.sent();
                res.render('client/pages/tin-tuc', { news: news, project: project, allNews: allNews });
                return [2 /*return*/];
        }
    });
}); });
router.route('/tin-tuc/:categoriesId/:newsId')
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoriesId, newsId, _a, news, project, allNews, newsDetail;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                categoriesId = req.params.categoriesId;
                newsId = req.params.newsId;
                return [4 /*yield*/, getCategories()];
            case 1:
                _a = _b.sent(), news = _a.news, project = _a.project;
                return [4 /*yield*/, getNews({ limit: 6, categoriesType: 2, categories: categoriesId })];
            case 2:
                allNews = _b.sent();
                return [4 /*yield*/, getNew(newsId)];
            case 3:
                newsDetail = _b.sent();
                res.render('client/pages/tin-tuc-detail', { news: news, project: project, allNews: allNews, newsDetail: newsDetail });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
