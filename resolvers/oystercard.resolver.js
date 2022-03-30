"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const oystercard_schema_1 = require("../schema/oystercard.schema");
const oystercard_service_1 = __importDefault(require("../service/oystercard.service"));
let OysterCardResolver = class OysterCardResolver {
    constructor(oysterCardService) {
        this.oysterCardService = oysterCardService;
        this.oysterCardService = new oystercard_service_1.default();
    }
    reloadOysterCard(input) {
        return this.oysterCardService.reloadOysterCard(input);
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => oystercard_schema_1.OysterCard),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [oystercard_schema_1.CreateOysterCardInput]),
    __metadata("design:returntype", void 0)
], OysterCardResolver.prototype, "reloadOysterCard", null);
OysterCardResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [oystercard_service_1.default])
], OysterCardResolver);
exports.default = OysterCardResolver;
