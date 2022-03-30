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
        const userOysterCard = await oystercard_schema_1.OysterCardModel.find({ user_id: input.userId });
        const userBalance = userOysterCard[0].total_balance;
        this.balance = userBalance;
        console.log("in", this.balance);
        console.log("out", this.balance);
        this.fareCharged = input.mode === transport_constants_1.ModeOfTransport.BUS ? fares_constants_1.fares.ANY_BUS_TRIP : fares_constants_1.fares.MAX_FARE;
        if (this.balance < this.fareCharged) {
            console.log("You don't have minimum balance, please recharge");
        }
        this.balance = this.balance - this.fareCharged;
        console.log(typeof (input.mode), input.mode);
        console.log(typeof (transport_constants_1.ModeOfTransport.BUS), transport_constants_1.ModeOfTransport.BUS);
        if (input.mode !== transport_constants_1.ModeOfTransport.BUS) {
            const station = input.station;
            const currenStation = Object.getOwnPropertyDescriptor(station_constants_1.default, station);
            this.journey[0] = currenStation === null || currenStation === void 0 ? void 0 : currenStation.value;
            console.log(this.journey[0]);
        }
        return userOysterCard;
    }
}
exports.default = TripService;
