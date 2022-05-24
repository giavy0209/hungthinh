"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string = 'zeJ3DA5oCYaZZ8arivJ6';
var auth = function (req, res, next) {
    if (req.headers.authorization === string)
        next();
    else {
        res.status(401).send('dmm');
    }
};
exports.default = auth;
