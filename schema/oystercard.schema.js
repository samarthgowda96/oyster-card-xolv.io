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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthInput = exports.CreateOysterCardInput = exports.OysterCardModel = exports.OysterCard = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
//Oyster Card Model Definition
let OysterCard = class OysterCard {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OysterCard.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], OysterCard.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Number),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], OysterCard.prototype, "total_balance", void 0);
OysterCard = __decorate([
    (0, type_graphql_1.ObjectType)()
], OysterCard);
exports.OysterCard = OysterCard;
exports.OysterCardModel = (0, typegoose_1.getModelForClass)(OysterCard);
// Definition of input for Oyster Card Model
let CreateOysterCardInput = class CreateOysterCardInput {
};
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateOysterCardInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], CreateOysterCardInput.prototype, "total_balance", void 0);
CreateOysterCardInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateOysterCardInput);
exports.CreateOysterCardInput = CreateOysterCardInput;
let CreateAuthInput = class CreateAuthInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateAuthInput.prototype, "_id", void 0);
CreateAuthInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateAuthInput);
exports.CreateAuthInput = CreateAuthInput;
