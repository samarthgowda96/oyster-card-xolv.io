"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schema/user.schema");
class UserService {
    async createUser(input) {
        return user_schema_1.UserModel.create(input);
    }
}
exports.default = UserService;
