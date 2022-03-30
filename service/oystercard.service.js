"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oystercard_schema_1 = require("../schema/oystercard.schema");
class OysterCardService {
    async reloadOysterCard(input) {
        return oystercard_schema_1.OysterCardModel.create(input);
    }
}
exports.default = OysterCardService;
