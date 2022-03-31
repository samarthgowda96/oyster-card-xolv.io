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
const starttrip_schema_1 = require("../schema/starttrip.schema");
const starttrip_service_1 = __importDefault(require("../service/starttrip.service"));
const oystercard_schema_1 = require("../schema/oystercard.schema");
let TripServiceResolver = class TripServiceResolver {
    constructor(startTripService) {
        this.startTripService = startTripService;
        this.startTripService = new starttrip_service_1.default();
    }
    createTrip(input) {
        return this.startTripService.createTrip(input);
    }
    swipeTrip(input) {
        return this.startTripService.swipeTrip(input);
    }
    exitTrip(input) {
        return this.startTripService.exitTrip(input);
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => starttrip_schema_1.Trip),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [starttrip_schema_1.CreateJourneyInput]),
    __metadata("design:returntype", void 0)
], TripServiceResolver.prototype, "createTrip", null);
__decorate([
    (0, type_graphql_1.Query)(() => oystercard_schema_1.OysterCard),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [starttrip_schema_1.CreateJourneyInput]),
    __metadata("design:returntype", void 0)
], TripServiceResolver.prototype, "swipeTrip", null);
__decorate([
    (0, type_graphql_1.Query)(() => oystercard_schema_1.OysterCard),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [starttrip_schema_1.CreateJourneyInput]),
    __metadata("design:returntype", void 0)
], TripServiceResolver.prototype, "exitTrip", null);
TripServiceResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [starttrip_service_1.default])
], TripServiceResolver);
exports.default = TripServiceResolver;
