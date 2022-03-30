"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const helloWorldResolver_1 = __importDefault(require("./helloWorldResolver"));
const oystercard_resolver_1 = __importDefault(require("./oystercard.resolver"));
const starttrip_resolver_1 = __importDefault(require("./starttrip.resolver"));
exports.resolvers = [helloWorldResolver_1.default, oystercard_resolver_1.default, starttrip_resolver_1.default];
