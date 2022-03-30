"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const helloWorldResolver_1 = __importDefault(require("./helloWorldResolver"));
const user_resolvers_1 = __importDefault(require("./user.resolvers"));
const oystercard_resolver_1 = __importDefault(require("./oystercard.resolver"));
exports.resolvers = [helloWorldResolver_1.default, user_resolvers_1.default, oystercard_resolver_1.default];
