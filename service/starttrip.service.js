"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const starttrip_schema_1 = require("../schema/starttrip.schema");
const oystercard_schema_1 = require("../schema/oystercard.schema");
const station_constants_1 = __importDefault(require("../constants/station.constants"));
const transport_constants_1 = require("../constants/transport.constants");
const fares_constants_1 = require("../constants/fares.constants");
class TripService {
    constructor(amount = 0) {
        this.balance = amount;
        this.fareCharged = 0;
        this.journey = [];
    }
    set Balance(amt) {
        this.balance = amt;
    }
    get Balance() {
        return this.balance;
    }
    async createTrip(input) {
        return starttrip_schema_1.TripModel.create(input);
    }
    async swipeTrip(input) {
        this.fareCharged = 0;
        const userOysterCard = await oystercard_schema_1.OysterCardModel.find({ user_id: input.userId });
        const userBalance = userOysterCard[0].total_balance;
        this.balance = userBalance;
        this.fareCharged = input.mode === transport_constants_1.ModeOfTransport.BUS ? fares_constants_1.fares.ANY_BUS_TRIP : fares_constants_1.fares.MAX_FARE;
        if (this.balance < this.fareCharged) { //return messages
            console.log("You don't have minimum balance, please recharge!");
        }
        this.balance = this.balance - this.fareCharged;
        await oystercard_schema_1.OysterCardModel.findOneAndUpdate({
            "_id": input.userId
        }, { $set: { total_balance: this.balance }
        }).exec();
        if (input.mode !== transport_constants_1.ModeOfTransport.BUS) {
            const inputstation = input.station;
            const currentStation = Object.getOwnPropertyDescriptor(station_constants_1.default, inputstation);
            this.journey[0] = currentStation === null || currentStation === void 0 ? void 0 : currentStation.value;
        }
        return oystercard_schema_1.OysterCardModel.findOne(input).lean();
    }
    distanceTravelled() {
        return this.calculateZonesTravelled(this.journey[0].zone, this.journey[1].zone);
    }
    calculateZonesTravelled(from, to) {
        let count = 0;
        from.forEach(function (fromZone) {
            to.forEach(function (toZone) {
                count = Math.abs(fromZone - toZone) + 1;
            });
        });
        return count;
    }
    findTubeFare(zonesTravelled, journey) {
        const from = journey[0].zone, to = journey[1].zone;
        console.log(from, to);
        if (zonesTravelled === 2 && !from.includes(1) && to.includes(1)) {
            return fares_constants_1.fares.ANYWHERE_IN_ZONE1;
        }
        if (zonesTravelled === 2 && from.includes(1) && !to.includes(1)) {
            return fares_constants_1.fares.ONE_ZONE_OUTSIDE_ZONE1;
        }
        if (zonesTravelled === 2 && from.includes(1) && to.includes(1)) {
            return fares_constants_1.fares.TWO_ZONE_INCLUDING_ZONE1;
        }
        if (zonesTravelled === 2 && !from.includes(1) && !to.includes(1)) {
            return fares_constants_1.fares.TWO_ZONE_EXCLUDING_ZONE1;
        }
        if (zonesTravelled === 3) {
            return fares_constants_1.fares.THREE_ZONES;
        }
        //default to
        return fares_constants_1.fares.MAX_FARE;
    }
    async exitTrip(input) {
        if (input.mode === transport_constants_1.ModeOfTransport.BUS) {
            await oystercard_schema_1.OysterCardModel.findOneAndUpdate({
                "_id": input.userId
            }, { $set: { total_balance: this.balance }
            }).exec();
            return oystercard_schema_1.OysterCardModel.findOne(input).lean();
        }
        const station = input.station;
        const currentStation = Object.getOwnPropertyDescriptor(station_constants_1.default, station);
        console.log(currentStation);
        this.journey[1] = currentStation === null || currentStation === void 0 ? void 0 : currentStation.value;
        this.fareCharged = this.findTubeFare(this.distanceTravelled(), this.journey);
        console.log(this.balance, fares_constants_1.fares.MAX_FARE, this.fareCharged);
        this.balance = (this.balance + fares_constants_1.fares.MAX_FARE) - this.fareCharged;
        console.log(this.balance);
        return oystercard_schema_1.OysterCardModel.findOneAndUpdate({
            "_id": input.userId
        }, { $set: { total_balance: this.balance }
        }).exec()
            .then(() => oystercard_schema_1.OysterCardModel.findOne(input).lean());
    }
}
exports.default = TripService;
