"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oystercard_schema_1 = require("../schema/oystercard.schema");
class OysterCardService {
    // To Reload balance 
    async reloadOysterCard(input) {
        return oystercard_schema_1.OysterCardModel.create(input);
    }
    // To View Oyster Card
    async viewOysterCard(input) {
        return oystercard_schema_1.OysterCardModel.findOne(input).lean();
    }
}
exports.default = OysterCardService;
