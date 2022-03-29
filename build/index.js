"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = require("mongoose");
var app = (0, express_1.default)();
dotenv_1.default.config();
var mangoose = (0, mongoose_1.connect)("mongodb+srv://".concat(process.env.USER, ":").concat(process.env.DB_PASSWORD, "@cluster0.jippb.mongodb.net/").concat(process.env.DB_NAME, "?retryWrites=true&w=majority"));
app.listen(7000, function () {
    console.log("listening on port 5000");
});
